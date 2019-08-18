module.exports = `march(
  StairsDifference(
    Sphere(2),
    Repeat( Sphere( .1 ), .25 ),
    .25,
    10
  ),
  Plane()
)
.fog( .1, Vec3(0,0,.25) )
.background( Vec3(0,0,.25) )
.render()

/* __--__--__--__--__--__--__--____
                                    
select code and hit ctrl+enter to  
execute. alt+enter (option+enter on 
a mac) executes a block of code.   
ctrl+shift+g toggles hiding         
the gui/code. try the other demos  
using the menu in the upper left    
corner. when you're ready to start 
coding go through the tutorials     
found in the same menu. Click on   
the ? button for a reference.       
                                   
For a nice intro on ray marching and
signed distance functions,which are
the techniques used by marching.js, 
see:                               
                                    
https://bit.ly/2qRMrpe             
                                    
Finally, if you'd prefer to work   
outside of the browser, try the     
Atom plugin for marching.js:       
                                    
https://atom.io/packages/atom-marching
                                    
** __--__--__--__--__--__--__--__*/`
