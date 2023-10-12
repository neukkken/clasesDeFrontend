const Carusel = () => {

    const rute = ['src/img/carusel/photo1.jpg', 'src/img/carusel/photo2.jpg']

    var a = 0;

    function change (){

        if(a>=rute.length){
            a = 0;
            console.log(a)
        }else if(a<=rute.length){
            a = 1;
            console.log(a)
        }

    }



    return(
        <div className="flex h-full bg-slate-400">
            {/* <div className="flex items-center">
                <button className="w-10 h-10 absolute flex bg-white" onClick={change()}>A</button>
            </div> */}
            <div className="flex items-center">
                <img className="w-full max-w-7xl" src={rute[0]} alt="" />
            </div>
            {/* <div className="flex justify-end items-center">
                <button className="w-10 h-10 absolute flex bg-black" onClick={change()}>A</button>
            </div> */}

        </div>
        
        
    )

}

export default Carusel