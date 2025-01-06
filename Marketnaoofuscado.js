document.title = "MarketPremium";
showDialogMarket();

function showDialogMarket() {
  inputStorage = function (key, value) {
    localStorage.setItem(key, value);
  };

  outputStorage = function (key) {
    return localStorage.getItem(key);
  };

  function refreshPage() {
    setTimeout(() => {
      location.reload(true);
    }, 1500);
  }

  function checkErrorBox() {
    if (document.querySelector(".error_box")) {
      setTimeout(() => {
        location.reload();
      }, 4000);
    }
  }

  checkErrorBox();

  function randomRefresh() {
    const timeRefreshPage = 180000;
    setTimeout(() => {
      location.reload(true);
    }, Math.floor(Math.random() * timeRefreshPage) + 10000);
    console.log("Refreshing in " + timeRefreshPage / 1000 + " seconds");
  }

  const activeMarketKey = "ActiveMarket " + game_data.village.id;
  let isMarketActive = outputStorage(activeMarketKey) == 1;

  function toggleMarketScript() {
    isMarketActive = !isMarketActive;
    inputStorage(activeMarketKey, isMarketActive ? 1 : 0);
    start.value = isMarketActive ? "Script Ativado" : "Script Desativado";
    start.classList = isMarketActive ? "btn evt-confirm-btn btn-confirm-yes" : "btn evt-confirm-btn btn-confirm-no";
    refreshPage();
  }

  function toggleMarketOption() {
    const optionMarketKey = "OptionMarket " + game_data.village.id;
    const currentOption = outputStorage(optionMarketKey);

    if (currentOption == 0) {
      inputStorage(optionMarketKey, 1);
      option.value = "Compra: Modo Usuário";
      option.classList = "btn evt-confirm-btn btn-confirm-yes";
    } else if (currentOption == 1) {
      createConfirmDialog();
    } else {
      inputStorage(optionMarketKey, 0);
      option.value = "Compra desativada";
      option.classList = "btn evt-confirm-btn btn-confirm-no";
    }
    refreshPage();
  }

  function createConfirmDialog() {
    const confirmDialog = document.createElement("htmlConfirmChangedMode");
    const dsBody = document.querySelector("#ds_body");
    dsBody.append(confirmDialog);
    confirmDialog.innerHTML = `
      <div id="fader" style="z-index: 14999;">
        <div class="confirmation-box" id="premium_exchange" role="dialog" aria-labelledby="premium_exchange_title">
          <div class="confirmation-box-content">
            <div class="confirmation-title">Confirmação</div>
            <div class="confirmation-content">Tem certeza que deseja mudar para o Modo Script?</div>
            <div class="confirmation-buttons">
              <button class="btn evt-confirm-btn btn-confirm-yes" type="button">Sim</button>
              <button class="btn evt-cancel-btn btn-confirm-no" type="button">Não</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const confirmButton = document.querySelector(".confirmation-buttons button");
    const cancelButton = document.querySelector(".btn.evt-cancel-btn.btn-confirm-no");

    confirmButton.addEventListener("click", () => {
      inputStorage("OptionMarket " + game_data.village.id, 2);
      option.value = "Compra: Modo Script";
      option.classList = "btn evt-confirm-btn btn-confirm-yes";
      confirmDialog.style.display = "none";
      refreshPage();
    });

    cancelButton.addEventListener("click", () => {
      confirmDialog.style.display = "none";
      refreshPage();
    });
  }

  function toggleMarketSell() {
    const sellMarketKey = "SellMarket " + game_data.village.id;
    const currentSellStatus = outputStorage(sellMarketKey);

    if (currentSellStatus == 1) {
      inputStorage(sellMarketKey, 0);
      vender.value = "Vendas Desativada";
      vender.classList = "btn evt-confirm-btn btn-confirm-no";
    } else {
      inputStorage(sellMarketKey, 1);
      vender.value = "Vendas Ativada";
      vender.classList = "btn evt-confirm-btn btn-confirm-yes";
    }
    refreshPage();
  }

  function saveSettings() {
    console.log("Save Settings Storage");
    const buyInputs = document.querySelectorAll(".inputbuy");
    const sellInputs = document.querySelectorAll(".inputsell");

    const configBuyLocalStorage = [];
    const configSellLocalStorage = [];

    buyInputs.forEach((input, index) => {
      const value = parseInt(input.value);
      configBuyLocalStorage[index] = value;
    });

    sellInputs.forEach((input, index) => {
      const value = parseInt(input.value);
      configSellLocalStorage[index] = value;
    });

    localStorage.setItem("configBuy " + game_data.village.id, JSON.stringify(configBuyLocalStorage));
    localStorage.setItem("configSell " + game_data.village.id, JSON.stringify(configSellLocalStorage));

    UI.SuccessMessage("Atualizando a página para aplicar as configurações. Aguarde!", 3000);
    setTimeout(() => location.reload(true), 1500);
  }

  function loadSettings() {
    const savedBuyConfig = localStorage.getItem("configBuy " + game_data.village.id);
    const savedSellConfig = localStorage.getItem("configSell " + game_data.village.id);

    if (savedBuyConfig && savedSellConfig) {
      console.log("Load Settings Storage");
      const buyInputs = document.querySelectorAll(".inputbuy");
      const sellInputs = document.querySelectorAll(".inputsell");

      const buyConfig = JSON.parse(savedBuyConfig);
      const sellConfig = JSON.parse(savedSellConfig);

      buyInputs.forEach((input, index) => {
        input.value = buyConfig[index];
      });

      sellInputs.forEach((input, index) => {
        input.value = sellConfig[index];
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.querySelector("#salvar");
    if (saveButton) {
      saveButton.addEventListener("click", saveSettings);
    }
    loadSettings();
  });

  start = document.querySelector("#iniciar");
  option = document.querySelector("#option");
  vender = document.querySelector("#vender");

  start.addEventListener("click", toggleMarketScript);
  option.addEventListener("click", toggleMarketOption);
  vender.addEventListener("click", toggleMarketSell);

  function initializeMarketScript() {
    if (outputStorage("ActiveMarket " + game_data.village.id) == 1) {
      start.value = "Script Ativado";
      start.classList = "btn evt-confirm-btn btn-confirm-yes";
      if (location.search.includes("&screen=market&mode=exchange")) {
        // Call necessary functions here
      } else {
        console.log("Load only functions essentials the config");
      }
    } else {
      start.value = "Script Desativado";
      start.classList = "btn evt-confirm-btn btn-confirm-no";
    }
  }

  initializeMarketScript();

  function handleMarketActions() {
    function handleSellMarket() {
      if (outputStorage("SellMarket " + game_data.village.id) == 1) {
        vender.value = "Vendas Ativada";
        vender.classList = "btn evt-confirm-btn btn-confirm-yes";
        if (location.search.includes("&screen=market&mode=exchange") && outputStorage("SellMarket " + game_data.village.id) == 1 && outputStorage("ActiveMarket " + game_data.village.id) == 1) {
          // Call necessary functions here
        }
      } else {
        vender.value = "Vendas Desativada";
        vender.classList = "btn evt-confirm-btn btn-confirm-no";
      }
    }

    function handleOptionMarket() {
      if (outputStorage("OptionMarket " + game_data.village.id) == 2) {
        option.value = "Compra: Modo Script";
        option.classList = "btn evt-confirm-btn btn-confirm-yes";
        if (location.search.includes("&screen=market&mode=exchange") && outputStorage("ActiveMarket " + game_data.village.id) == 1) {
          // Call necessary functions here
        }
      } else if (outputStorage("OptionMarket " + game_data.village.id) == 1) {
        option.value = "Compra: Modo Usuário";
        option.classList = "btn evt-confirm-btn btn-confirm-yes";
        if (location.search.includes("&screen=market&mode=exchange") && outputStorage("ActiveMarket " + game_data.village.id) == 1) {
          // Call necessary functions here
        }
      } else {
        option.value = "Compra desativada";
        option.classList = "btn evt-confirm-btn btn-confirm-no";
        inputStorage("OptionMarket " + game_data.village.id, 0);
      }
    }

    handleSellMarket();
    handleOptionMarket();
  }

  handleMarketActions();
}
