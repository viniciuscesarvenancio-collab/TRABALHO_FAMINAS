/**
 * Aplicação Principal - Página Setorial FAMINAS
 * Extensão Universitária • Engenharia de Software • ADS
 */

import { initModalController } from './modal-controller.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o gerenciador de modais institucionais (Sobre, Termos, Privacidade)
  initModalController();
  initImageCardDisclosures();

  console.log('[InfoHub Setorial] Template institucional inicializado com sucesso.');

  /* ==========================================================================
     ESPAÇO PARA LÓGICA ESPECÍFICA DOS ESTUDANTES (OPCIONAL):
     Exemplos de funcionalidades que vocês podem adicionar:
     - Copiar telefone/e-mail para a área de transferência ao clicar em um botão
     - Filtragem de dúvidas frequentes ou cálculo de prazos
     - Alternância de visualizações ou accordions interativos
     ========================================================================== */
});

function initImageCardDisclosures() {
  const disclosures = document.querySelectorAll('.image-card-disclosure');

  disclosures.forEach((disclosure) => {
    const toggle = disclosure.querySelector('.image-card-toggle');
    const detailsLabel = disclosure.dataset.detailsLabel;

    if (!(toggle instanceof HTMLElement) || !detailsLabel) {
      console.error('[InfoHub Setorial] Um card de imagem está sem controle ou descrição acessível.');
      return;
    }

    const updateToggleLabel = () => {
      toggle.setAttribute(
        'aria-label',
        `${disclosure.open ? 'Ocultar' : 'Mostrar'} detalhes: ${detailsLabel}`
      );
    };

    updateToggleLabel();
    disclosure.addEventListener('toggle', updateToggleLabel);
  });
}
