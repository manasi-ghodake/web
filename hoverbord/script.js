const squareArray = document.getElementById("Squares");

const colors = ["red","green","orange","yellow","pink"];

const Color = "rgba(255,255,255,)";

for( const square of squareArray) {
    square.addEventlistener("mouseover", () => {
        const randomNum = parseInt(Math.random() * colors.length);

    square.style.background = colors[randomNum];

    square.style.transition = ":0s background-color ease";

    square.style.boxShow = "0px 0px 2px" + colors[randomNum];
    

    });
    square.addEventlistener("mouseout",() => {
        square.style.backgroundColor = defaultColor;
        square.style.transition = "background-color 2s ease";
        square.style.boxShow = "";
        

    });
}



        

