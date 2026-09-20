"""Abduction by enumeration.

Peirce's schema: the surprising fact C is observed; but if A were true, C would be
a matter of course; hence there is reason to suspect A.

Here C is Kepler's table of orbital periods and distances, and A is searched for
among expressions in the two variables, smallest first.  An expression counts as
an explanation only if it is near-constant on the real data AND varies on random
data: an "explanation" that fits any data whatever explains nothing.

    python3 abduce.py
"""
import itertools, math, random

# semi-major axis a (AU), orbital period T (years), for Kepler's six planets
DATA = [("Mercury", 0.3871, 0.2408), ("Venus",   0.7233,  0.6152),
        ("Earth",   1.0000, 1.0000), ("Mars",    1.5237,  1.8809),
        ("Jupiter", 5.2029, 11.862), ("Saturn",  9.5367, 29.457)]

TOL = 3e-3          # how constant a law must be on the real data
VACUOUS = 0.1       # how much it must vary on random data to count as saying anything

OPS = {"*": lambda x, y: x * y,
       "/": lambda x, y: x / y if abs(y) > 1e-12 else None,
       "+": lambda x, y: x + y,
       "-": lambda x, y: x - y}


def trees(n):
    """Every binary tree shape with n leaves."""
    if n == 1:
        yield None
        return
    for k in range(1, n):
        for left in trees(k):
            for right in trees(n - k):
                yield (left, right)


def build(shape, leaves, ops, state):
    if shape is None:
        state["i"] += 1
        return leaves[state["i"] - 1]
    left = build(shape[0], leaves, ops, state)
    op = ops[state["j"]]
    state["j"] += 1
    right = build(shape[1], leaves, ops, state)
    return (op, left, right)


def ev(expr, env):
    if isinstance(expr, str):
        return env[expr]
    x, y = ev(expr[1], env), ev(expr[2], env)
    if x is None or y is None:
        return None
    try:
        v = OPS[expr[0]](x, y)
    except (ZeroDivisionError, OverflowError):
        return None
    return None if v is None or abs(v) > 1e12 else v


def show(expr):
    return expr if isinstance(expr, str) else "(" + show(expr[1]) + expr[0] + show(expr[2]) + ")"


def spread(values):
    """Relative spread. Zero means the expression is constant across the rows."""
    if any(v is None for v in values):
        return None
    mean = sum(values) / len(values)
    return None if abs(mean) < 1e-9 else (max(values) - min(values)) / abs(mean)


def search():
    real = [{"a": a, "T": T} for _, a, T in DATA]
    random.seed(0)
    fake = [{"a": random.uniform(0.2, 10), "T": random.uniform(0.2, 30)} for _ in range(8)]

    checked, seen, hits = 0, set(), []
    for n in range(1, 6):
        for shape in trees(n):
            for leaves in itertools.product("aT", repeat=n):
                for ops in itertools.product(OPS, repeat=n - 1):
                    expr = build(shape, list(leaves), list(ops), {"i": 0, "j": 0})
                    checked += 1
                    fit = spread([ev(expr, row) for row in real])
                    if fit is None or fit > TOL:
                        continue
                    content = spread([ev(expr, row) for row in fake])
                    if content is None or content < VACUOUS:
                        continue            # constant whatever the data: explains nothing
                    values = [ev(expr, row) for row in real]
                    key = tuple(round(math.log(abs(v) + 1e-30), 9) for v in values)
                    if key in seen:
                        continue
                    seen.add(key)
                    hits.append((show(expr), sum(values) / len(values), fit, content))
        if hits:
            return hits, checked, n
    return [], checked, None


if __name__ == "__main__":
    hits, checked, n = search()
    for expr, value, fit, content in hits:
        print(f"{expr:22} = {value:.6f}   spread {fit:.2e}   varies on random data: {content:.1f}")
    print(f"\n{len(hits)} law(s), {n} leaves, after {checked:,} candidates")
