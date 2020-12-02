function calculate()
{
    var amount = $('#amount').val();
    var percentage = $('#Tip').val();
    var tip = amount * (percentage / 100);
    var total = Number(amount) + tip;

    $('#tipamount').val(tip.toFixed(2));
    $('#totalamount').val(total.toFixed(2));

    return false; //help to not submit
}

$('#calculator').submit(calculate);
