let aBox = function(imgAdd, t_start, ydir, xdir, div){
    new p5(function (p) {
      let img;
      let time = 0;
      let td = 1;
      let logo_colors = [[0,170,231],[0,127,198],[0,63,135]];
    
    
      p.preload = function() {
        img = p.loadImage(imgAdd);
      }
      
      p.setup = function() {
        p.createCanvas(240, 240);
        p.frameRate(12);
        p.stroke("white");
      }
    
      p.draw = function() {
  
        p.background("white");
        p.image(img,0,0,240,240);
        p.strokeWeight(2);
        p.rectMode(p.CORNER);
            
          let side = 20;
  
          /*let transparency = 255*(120-time)/120;
          p.fill(255,255,255,transparency);
          p.rect(0,0,240,240);*/
          
          let yidx;
  
          if(time<=(t_start+12)){
            let start_idx = 0;
            if(time>=(t_start)){
              start_idx = time-t_start;
            }
            for(let i=start_idx; i<12; i++){
              p.fill(logo_colors[i%3][0], logo_colors[i%3][1], logo_colors[i%3][2]);
              yidx = side*i;
              if(ydir==-1){
                yidx = 220-yidx;
              }
              p.rect(yidx,0,20,240);
            }
          }
          
          time += td;
          if(time==60){
            td = -1;
          }else if(time==0){
            td = 1;
          }
  
  
        
      }
  
    }, div)
  }
  
  let a1 = aBox("Box1.jpg",0,1,0, 'c1');
  let a2 = aBox("Box2.jpg",12,1,0, 'c2');
  let a3 = aBox("Box3.jpg",24,1,0, 'c3');
  let a4 = aBox("Box4.jpg",36,1,0, 'c4');
  let a5 = aBox("Box5.jpg",36,-1,0, 'c5');
  let a6 = aBox("Box6.jpg",24,-1,0, 'c6');
  let a7 = aBox("Box7.jpg",12,-1,0, 'c7');
  let a8 = aBox("Box8.jpg",0,-1,0, 'c8');
  let a9 = aBox("Box9.jpg",0,1,0 ,'c9');
  let a10 = aBox("Box10.jpg",12,1,0 ,'c10');
  let a11 = aBox("Box11.jpg",24,1,0 ,'c11');
  let a12 = aBox("Box12.jpg",36,1,0, 'c12');