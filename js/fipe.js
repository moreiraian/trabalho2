function buscaFipe() {
    let fipe = document.getElementById('fipe').value;
    if(fipe !==""){
    let url = "https://brasilapi.com.br/api/fipe/preco/v1/" + fipe;

    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

    req.onload = function() {
        if(req.status == 200){
            let car = JSON.parse(req.response);
            document.getElementById('modelo').value = car[0].modelo;
            document.getElementById('ano').value = car[0].anoModelo;
            document.getElementById('marca').value = car[0].marca;
            document.getElementById('valor').value = car[0].valor;
            document.getElementById('btnpage').style.display = "block";

        }
        else if(req.status === 404) {
            alert("FIPE inválido");
        }
        else{
            alert("Houston, temos um problema");
        }
    }
    }
}
