function generateinvoice() {
    let clientname = document.getElementById('clientname').value;
    let clientemail = document.getElementById('clientemail').value;
    let clientaddress = document.getElementById('clientaddress').value;
    let clientphoneno = document.getElementById('clientphoneno').value;
    let productname = document.getElementById('productname').value;
    let quanty = parseInt(document.getElementById('qty').value) || 0;
    let price = parseInt(document.getElementById('price').value) || 0;
    let tax = parseFloat(document.getElementById('tax').value) || 0;
    let discount = parseFloat(document.getElementById('discount').value) || 0;

    let amount = price * quanty;
    let taxamount = (amount * tax) / 100;
    let discountamount = (amount * discount) / 100;
    let totalamount = amount + taxamount - discountamount;

    let str = `
        <tr>
            <td>${clientname}</td>
            <td>${clientemail}</td>
            <td>${clientaddress}</td>
            <td>${clientphoneno}</td>
            <td>${productname}</td>
            <td>${quanty}</td>
            <td>${price}</td>
            <td>${amount}</td>
            <td> ${tax} </td>
            <td> ${discount}% </td>
            <td> ${totalamount} </td>
        </tr>
    `;
    document.getElementById('invoicedata').innerHTML += str;
}