// scripts.js

// Exemplo de uso do jQuery
$(document).ready(function() {
    // Código jQuery aqui
    $('input[type="checkbox"]').change(function() {
      // Verifica se a caixa de seleção foi marcada ou desmarcada
      if ($(this).is(':checked')) {
        $(this).closest('tr').addClass('selected');
      } else {
        $(this).closest('tr').removeClass('selected');
      }
    });
  });
  // scripts.js

// Exemplo de uso do jQuery
$(document).ready(function() {
    // Marcar todas as caixas de seleção ao clicar no botão "Selecionar Tudo"
    $('#selectAllBtn').click(function() {
      $('input[type="checkbox"]').prop('checked', true);
      $('input[type="checkbox"]').closest('tr').addClass('selected');
    });
  
    // Limpar todas as seleções ao clicar no botão "Limpar Seleções"
    $('#clearSelectionBtn').click(function() {
      $('input[type="checkbox"]').prop('checked', false);
      $('input[type="checkbox"]').closest('tr').removeClass('selected');
    });
  
    // Destacar linhas selecionadas
    $('input[type="checkbox"]').change(function() {
      // Verifica se a caixa de seleção foi marcada ou desmarcada
      if ($(this).is(':checked')) {
        $(this).closest('tr').addClass('selected');
      } else {
        $(this).closest('tr').removeClass('selected');
      }
    });
  });
  