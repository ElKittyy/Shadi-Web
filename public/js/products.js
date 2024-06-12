const URL_BASE = 'http://localhost:3000/';

function getProducto(){
    var idProducto = localStorage.getItem("idProducto");

    if(idProducto === 0 ) return false;

    $.ajax({
        "url": URL_BASE + "verProductos",
        "type": "GET",
        "datatype": "json",
        "data": {
            "id": localStorage.getItem("idProducto"),
        }, success:function(r){
            $("#prod_price").val(r.precio);
            $("#prod_name").val(r.nombre);
        }
    });
}