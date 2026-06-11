# Shielding

Shields are a form of damage mitigation.
They act like simple forms of temporary health.
A generic shield will block all forms of damage, but there are specific types of shields that will only block that type of incoming damage.
Current shields are viewable through `hp` or `.`.

## Example of a generic shield

```
[ SHIELD> Generic(200)         ]
```

  * If you took `50` points of fire damage, the shield would absorb that and be reduced to `150`
  * If you then took `100` points of water damage, the shield would absorb that and be reduced to `50`
  * If you then took `100` points of lightning damage, the shield would absorb `50` (total of `200` absorbed), then you would receive `50` points of damage

## Example of a specific shield

```
[ SHIELD> Fire(500)            ]
```

  * If you took `50` points of fire damage, the shield would absorb that and be reduced to `450`
  * If you then took `100` points of water damage, the damage would bypass the shield. You would take all `100` points of damage.
  * If you then took `100` points of lightning damage, the damage would bypass the shield. You would take all `100` points of damage.
  * At the end of this, you would have `450` shield against fire damage remaining, and 200 HP damage taken.

## Example of multiple specific shields

```
[ SHIELD> Fire(500)            Water(500)           Earth(500)         ]
```

  * If you took `50` points of fire damage, the fire shield would absorb that and be reduced to `450`
  * If you then took `100` points of water damage, the water shield would absorb that and be reduced to `400`
  * If you then took `100` points of lightning damage, the damage would bypass the shield. You would take all `100` points of damage.
  * At the end of this, you would have `450` fire shield, `400` water shield, `500` earth shield, and 100 HP damage taken

