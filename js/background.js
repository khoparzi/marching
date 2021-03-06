const SceneNode = require( './sceneNode.js' ),
      { param_wrap, MaterialID } = require( './utils.js' ),
      { Var, float_var_gen, vec2_var_gen, vec3_var_gen, vec4_var_gen } = require( './var.js' )

const { Vec2, Vec3, Vec4 } = require( './vec.js' )

const BG = function( Scene, SDF ) {

  const Background = function( color ) {
    if( SDF.memo.background === undefined ) {
      const bg = Object.create( Background.prototype )

      const __color = param_wrap( Vec3(color), vec3_var_gen( 0,0,0, 'bg' ), 'bg' )  
      
      Object.defineProperty( bg, 'color', {
        get() { return __color },
        set( v ) {
          __color.var.set( v )
        }
      })
      
      // this refers to the current scene via implicit binding in scene.js
      this.postprocessing.push( bg )

      SDF.memo.background = true
    }
    return this
  }

  Background.prototype = SceneNode()
 
  Object.assign( Background.prototype, {
    emit() {
      return ''//this.color.emit()
    },
   
    emit_decl() {
      let str = this.color.emit_decl()
      SDF.memo.background = true

      return str
    },

    update_location( gl, program ) {
      this.color.update_location( gl, program )
    },

    upload_data( gl ) {
      this.color.upload_data( gl )
    }
  })

  return Background
}

module.exports = BG 
