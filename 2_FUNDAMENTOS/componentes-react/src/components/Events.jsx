const Events = () => {

    const handleMyEvent = (e) =>{
        console.log(e);
        alert("Evento do botão");
    };

    const renderSomething = (x) => {

        if(x){
            return <h1>Renderizando True!</h1>;
        } else{
            return <h1>Renderizando False!</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={()=> console.log("Clicou!")}>CLique aqui também!</button>
            </div>
            <div>
                <button
                    onClick={()=>{
                        if(true){
                            console.log("Isso não deveria existir");
                        }
                    }}
                > 
                        Clique aqui outra vez!   
                    </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;