function download(){
    const element = document.getElementById('pdf');
    var opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 3.98 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
}