module.exports = `mat1 = Material( 'phong', Vec3(.5), Vec3(1), Vec3(3), 64, Vec3( 0,1,4 ) )
mat2 = Material( 'phong', Vec3(.05), Vec3(1), Vec3(3), 64, Vec3( 2,4,8 ) )
mat3 = Material( 'phong', Vec3(.5), Vec3(1), Vec3(0), 16, Vec3( 0,1,1 ) )
mat4 = Material( 'phong', Vec3(.05), Vec3(1,0,0), Vec3(1), 16, Vec3( 4,2,5 ) )
mat5 = Material( 'phong', Vec3(.05), Vec3(.5,.5,.5), Vec3(.5,.5,.5), 32, Vec3( 0,2,.25 ) )
mat6 = Material( 'phong', Vec3(.05), Vec3(.5), Vec3(1), 64, Vec3( 0,4,8 ) )
mat7 = Material( 'orenn', Vec3(.05), Vec3(1), Vec3(1), 12, Vec3( 0,0,1 ) )
 
lights = [
  Light( Vec3(0,2,0), Vec3(1,.35,.35), 1 ),
  Light( Vec3(4,0,-12), Vec3(1), .25 ),
  Light( Vec3(-4,0,-12), Vec3(1), .25 ),  
  Light( Vec3(0,-2,0), Vec3(1,.35,.35), 2 )
]
 
twopi = Math.PI * 2
count = 25
radius = 6
for( let i = 0; i < count; i++ ) {
  const percent = i / count
  lights.push( Light( 
    Vec3( Math.sin( percent * twopi ) * radius, 2, Math.cos( percent * twopi ) * radius ), 
    Vec3(1,1,.75), 
    2.
  ))
}
 
lightSpheres = PolarRepeat( Sphere(.2 ).material( mat5 ), 25, radius ).translate( 4,0,0 )
 
column = Difference(
  Cylinder( Vec2(.1,2.5) ).material( mat1 ),
  Repeat(
    Box( Vec3(.1) ).material( mat6 ),
    Vec3(0,1,0)
  ),
  .1
)
columns = PolarRepeat( column, 12, .85 )
 
candelabra = Union2(
  StairsIntersection(
    PolarRepeat(
      PolarRepeat(
        t = Torus88( Vec2(.75,.1) ).material( mat1 ), 
        15,
        3.75
      ).rotate( 180,1,0,0 ),
      count,
      2
    ),
    Plane( Vec3(0,-.25,0) ).material( mat1 ),
    .1
  ),
  lightSpheres,
  Sphere( .25, Vec3(0,3.5,0) ).material( mat5 ),
  Sphere( .25, Vec3(0,-1,0) ).material( mat5 )
).translate( 0,-1,0)
 
roomRadius = 8.5
m = march(
  Union2(
    RoundUnion(
      candelabra,
      Plane( Vec3( 0,-1,0 ), 2.5 ).material( mat3 ),
      .5
    ),
    columns,
     
    Difference(
      Onion(
        Cylinder( Vec2( roomRadius, 2.5 ), Vec3(0,.45,0) ).material( mat7 ),
        .175
      ),
      PolarRepeat( Box( Vec3(.7,1.5,.125) ).material( mat5 ), 40, roomRadius+.5 )
    )
  )
)
.fog( .125, Vec3(0) )
.light( ...lights )
.render()
.camera( 0, 0, roomRadius-.5 )`
