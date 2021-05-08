
let aBox = function(imgAdd, t_start, xdir, ydir, div){
  new p5(function (p) {
    let img;
    let k = -1;
    let pp = 0;
    let s = 1;
    let x = 0;
    let xd = 24;
    let tp = 0;
    let td = 2;
    let flag = true;
  
    let arr = new Array();
    for(let i=1; i<=30; i++){
        arr.push(255-i*5);
    }
  
    p.preload = function() {
      img = p.loadImage(imgAdd);
    }
    
    p.setup = function() {
      p.createCanvas(240, 240);
      p.frameRate(10);
    }
  
    p.draw = function() {
      if(flag && tp==0){
        p.rectMode(p.CENTER);
        let idx;
        let count = 0;
        for(let i=30; i>0; i--){
          idx = (k+i)%30;
          p.stroke("beige");
          p.fill(0,0,arr[idx]);
          p.rect(120,120, i*i*i*i*i*i/2430000, i*i*i*i*i*i/2430000,i*i*i*i*i*i*(30-i)*4/(2430000*100));
        }
        //stroke("Black");
        p.line(0,0,240,240);
        p.line(0,240,240,0);
        if(pp==0){
          s = 1;
        }else if(pp==30){
          flag = false;
          s = -1;
        }
        
        let i = pp;
        p.fill(25,25,112);
        p.rect(120,120, i*i*i*i*i*i/2430000, i*i*i*i*i*i/2430000,i*i*i*i*i*i*(30-i)*4/(2430000*100));
        k = (k-s+30)%31;
        pp = (pp+s)%31;
      }else if(t_start<=tp && tp<=(t_start+10)){
        
        p.image(img,0,0,240,240);
        p.fill(25,25,112);
        p.rectMode(p.CORNER);
        let xcord = (tp-t_start)*24*xdir;
        let ycord = (tp-t_start)*24*ydir
        p.rect(xcord,ycord,240,240);
        
        
        tp += td;
        if(tp==126){
          td = -2;
        }else if(tp==0){
          td = 2;
          flag = true;
        }
        
      }else{
        
        tp += td;
        if(tp==126){
          td = -2;
        }else if(tp==0){
          td = 2;
          flag = true
        }
      }
      
    }

  }, div)
}

let a1 = aBox("Box1.jpg",0,1,0, 'c1');
let a2 = aBox("Box2.jpg",10,1,0, 'c2');
let a3 = aBox("Box3.jpg",20,1,0 ,'c3');
let a4 = aBox("Box4.jpg",30,0,1, 'c4');
let a5 = aBox("Box5.jpg",90,0,-1 ,'c5');
let a6 = aBox("Box6.jpg",100,1,0 ,'c6');
let a7 = aBox("Box7.jpg",110,1,0,'c7');
let a8 = aBox("Box8.jpg",40,0,1, 'c8');
let a9 = aBox("Box9.jpg",80,0,-1 ,'c9');
let a10 = aBox("Box10.jpg",70,-1,0 ,'c10');
let a11 = aBox("Box11.jpg",60,-1,0 ,'c11');
let a12 = aBox("Box12.jpg",50,0,1, 'c12');