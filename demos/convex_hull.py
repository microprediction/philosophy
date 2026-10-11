"""How often does a new point land inside the convex hull of the training set?

Draw n "training" points from a standard Gaussian in d dimensions, then draw
fresh points from the same distribution and ask, for each one, whether it is a
convex combination of the training points.  That is a linear feasibility
problem: find weights w >= 0 with sum(w) = 1 and X^T w = x.  We solve it with
scipy.optimize.linprog.

The fresh points come from exactly the distribution the training points came
from, so none of them is unusual.  If "inside the hull" were the definition of
interpolation, this table says how much of ordinary life is extrapolation.

    python3 convex_hull.py

Requires numpy and scipy.  Runs in well under a minute.
"""
import numpy as np
from scipy.optimize import linprog

N_TRAIN = 1000
N_TEST = 200
DIMS = [2, 5, 10, 20, 50]
SEED = 0


def in_hull(X, x):
    """True if x is a convex combination of the rows of X."""
    n = X.shape[0]
    A_eq = np.vstack([X.T, np.ones((1, n))])
    b_eq = np.concatenate([x, [1.0]])
    res = linprog(np.zeros(n), A_eq=A_eq, b_eq=b_eq, bounds=(0, None), method="highs")
    return res.status == 0


def main():
    rng = np.random.default_rng(SEED)
    print(f"n = {N_TRAIN} training points, {N_TEST} fresh points per dimension, standard Gaussian")
    print(f"{'d':>4}  {'inside hull':>12}  {'fraction':>9}")
    for d in DIMS:
        X = rng.standard_normal((N_TRAIN, d))
        Y = rng.standard_normal((N_TEST, d))
        inside = sum(in_hull(X, y) for y in Y)
        print(f"{d:>4}  {inside:>5} / {N_TEST:<4}  {inside / N_TEST:>9.3f}")

    # Sanity checks: a training point and the centroid are inside; a far point is not.
    d = 20
    X = rng.standard_normal((N_TRAIN, d))
    assert in_hull(X, X[0])
    assert in_hull(X, X.mean(axis=0))
    assert not in_hull(X, 100 * np.ones(d))
    print("checks passed: training point and centroid inside, distant point outside")


if __name__ == "__main__":
    main()
