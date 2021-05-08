
let aBox = function(imgAdd, t_start, xdir, ydir, div){
  new p5(function (p) {
    let img;
    let time = 0;
    let td = 1;
    let flag = true;
    let k = 0;
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

        let transparency = 255*(120-time)/120;
        p.fill(255,255,255,transparency);
        p.rect(0,0,240,240);
        
        let xidx;
        let k = 0;
        if(time<=(t_start+12+k)){
          let start_idx = 0;
          if(time>=(t_start+k)){
            start_idx = time-t_start;
          }
          for(let i=start_idx; i<12; i++){
            p.fill(logo_colors[i%3][0], logo_colors[i%3][1], logo_colors[i%3][2]);
            xidx = side*i;
            if(xdir==-1){
              xidx = 220-xidx;
            }
            p.rect(xidx,0,20,240);
          }
        }
        
        time += td;
        if(time==160){
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
let a5 = aBox("Box5.jpg",84,-1,0, 'c5');
let a6 = aBox("Box6.jpg",72,-1,0, 'c6');
let a7 = aBox("Box7.jpg",60,-1,0, 'c7');
let a8 = aBox("Box8.jpg",48,-1,0, 'c8');
let a9 = aBox("Box9.jpg",96,1,0 ,'c9');
let a10 = aBox("Box10.jpg",108,1,0 ,'c10');
let a11 = aBox("Box11.jpg",120,1,0 ,'c11');
let a12 = aBox("Box12.jpg",132,1,0, 'c12');