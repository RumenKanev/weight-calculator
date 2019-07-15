

function sum() {

    let qty = document.getElementById('broiki').value;
    (qty === '') ? alert('Please, enter Quantities') : '';

    let width = document.getElementById('width').value;
    (width === '') ? alert('Please, enter Width') : '';

    let length = document.getElementById('length').value;
    (length === '') ? alert('Please, enter Lenght') : '';

    let material = document.getElementById('material').value;
    (material === '') ? alert('Please, select Material') : '';

    let arr = [
        { name: 'B', value: 535.95 },
        { name: 'C', value: 493.90 },
        { name: 'E', value: 415.20 },
        { name: 'F', value: 518.10 },
        { name: 'G', value: 392.05 },
        { name: 'O', value: 514.95 },
        { name: 'B/C', value: 685.65 },
        { name: 'E/B', value: 703.75 },
        { name: 'F/E', value: 753.30 },
        { name: '1250micDB', value: 810.00 },
        { name: '2000micDB', value: 1375.00 }]

    let output = arr.filter(x => x.name === material);
    let value = output.map(x => x.value);
    let total = (length * width / 1000) * qty * (value / 1000) / 1000;
    let final = Math.round(total * 100) / 100;
    (final === 0) ? '' : document.getElementById('grOutput').innerHTML = final * 1000 + 'g';
    (final === 0) ? '' : document.getElementById('kgOutput').innerHTML = final + 'kg';

    let m2 = length * width / 1000 * qty / 1000;
    (material === '' || qty === '' || length === '' || width === '') ? '' : document.getElementById('m2').innerHTML = m2 + 'm2';

}  
