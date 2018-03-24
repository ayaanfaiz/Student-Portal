let  addRow=(name, id, branch)=>{
    $('.mainTable').append(`
      <tr id="1">
        <th scope="row">${count++}</th>
        <td id='name'>${name}</td>
        <td id='ids'>${id}</td>
        <td id='branch'>${branch}</td>
        <td>
          <div class="input-group-prepend">
            <input type="checkbox" class="checkBox" aria-label="Checkbox for following text input">
          </div>
        </td>
      </tr>
      `)
};
var f = 1;
var arr;
var count = 1;
$('.saveButton').click(function() {
  let name = $('.name').val();
  let id = $('.idNo').val();
  let branch = $('.branch').val();
  if(f === 1){

    console.log(`Name - ${name} id- ${id} branch- ${branch}`);
    addRow(name, id, branch);

  }
  else{
    $(`#name`).html(name);
    $(`#id`).html(Number(id));
    $(`#branch`).html(branch);
    console.log("hi");
    f = 1;
  }
  $('.formBody').trigger('reset');
});
$('.deleteButton').click(function() {

    let l = $('.checkBox:checked').parent().parent().parent().remove().length;
    count -=l;
});

$('.modifyButton').click(function() {
  if($('.checkBox:checked').length > 1){
      $('.modifyButton').attr('data-toggle', 'modal');
      $('.modifyButton').attr('data-target', '#exampleModal1');

  }
  else{
    let mainText = $('.checkBox:checked').parent().parent().parent().text();
    let arr = mainText.split(' ');
    let name = arr[16];
    let id = arr[24];
    let branch = arr[32];
    $('.name').val(name);
    $('.idNo').val(Number(id));
    $('.branch').val(branch);
    $('.modifyButton').attr('data-toggle', 'modal');
    $('.modifyButton').attr('data-target', '#exampleModal');
    f = 0;
  }
});
