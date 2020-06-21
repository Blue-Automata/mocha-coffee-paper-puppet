module.exports = {

  congratulations:  async (page) => {
    await page.evaluate(() => {
      let dom = document.querySelector('html');
      dom.innerHTML = `<!DOCTYPE>
            <html>
              <head>
                <meta charset="UTF-8">
                <title>Congratulations</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js"></script>
            
                <style>
                  body{
                    margin: 0;
                    padding: 0;
                    background: #0c002b;
                    font-family: sans-serif;
                  }
                  
                  a{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    text-transform: uppercase;
                    color: #1670f0;
                    padding: 30px 60px;
                    font-size: 30px;
                    letter-spacing: 2px;
                    text-decoration: none;
                    box-shadow: 0 20px 50px rgba(255,255,255,0.05);
                    overflow: hidden;
                  
                  }
                  
                  a:before{
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    bottom: 2px;
                    content: '';
                    width: 50%;
                    background: rgba(255,255,255,0.05);
                  }
                  
                  a span:nth-child(1){
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, #0c002b, #1779ff);
                    animation: animate1 2s linear infinite;
                  }
                  
                  @keyframes animate1{
                    0%{
                      transform: translateX(-100%);
                    }
                  
                    100%{
                      transform: translateX(100%);
                    }
                  }
                  
                  a span:nth-child(2){
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(to bottom, #0c002b, #1779ff);
                    animation: animate2 2s linear infinite;
                    animation-delay: 1s;
                  }
                  
                  @keyframes animate2{
                    0%{
                      transform: translateY(-100%);
                    }
                  
                    100%{
                      transform: translateY(100%);
                    }
                  }
                  
                  a span:nth-child(3){
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to left, #0c002b, #1779ff);
                    animation: animate3 2s linear infinite;
                  }
                  
                  @keyframes animate3{
                    0%{
                      transform: translateX(100%);
                    }
                  
                    100%{
                      transform: translateX(-100%);
                    }
                  }
                  
                  a span:nth-child(4){
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(to top, #0c002b, #1779ff);
                    animation: animate4 2s linear infinite;
                    animation-delay: 1s;
                  }
                  
                  @keyframes animate4{
                    0%{
                      transform: translateY(100%);
                    }
                  
                    100%{
                      transform: translateY(-100%);
                    }
                  }
              
                </style>
              </head>
              <body>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    TEST PASSED!
                  </a>
              </body>
            </html>`
      }); 
  }

}