document.title = "MarketPremium";
showDialogMarket();
function showDialogMarket() {
  inputStorage = function (_0x334326, _0x3fed9f) {
    localStorage.setItem(_0x334326, _0x3fed9f);
  };
  outputStorage = function (_0x218449) {
    return localStorage.getItem(_0x218449);
  };
  function _0x41cf1d() {
    setTimeout(() => {
      location.reload(true);
    }, 1500);
  }
  function _0x46734c() {
    if (document.querySelector(".error_box")) {
      setTimeout(() => {
        location.reload();
      }, 4000);
    }
  }
  _0x46734c();
  function _0x5aef2a() {
    timeRefreshPage = 180000;
    setTimeout(() => {
      location.reload(true);
    }, Math.floor(Math.random() * timeRefreshPage) + 10000);
    console.log("Refreshing in " + timeRefreshPage / 1000 + " seconds");
  }
  const _0xa989e8 = "ActiveMarket " + game_data.village.id;
  let _0x38bc2b = outputStorage(_0xa989e8) == 1;
  function _0x2fdff5() {
    _0x38bc2b = !_0x38bc2b;
    inputStorage(_0xa989e8, _0x38bc2b ? 1 : 0);
    start.value = _0x38bc2b ? "Script Ativado" : "Script Desativado";
    start.classList = _0x38bc2b ? "btn evt-confirm-btn btn-confirm-yes" : "btn evt-confirm-btn btn-confirm-no";
    _0x41cf1d();
  }
  function _0x2cc2d5() {
    if (outputStorage("OptionMarket " + game_data.village.id) == 0) {
      inputStorage("OptionMarket " + game_data.village.id, 1);
      option.value = "Compra: Modo Usuário";
      option.classList = "btn evt-confirm-btn btn-confirm-yes";
      _0x41cf1d();
    } else {
      if (outputStorage("OptionMarket " + game_data.village.id) == 1) {
        const _0x3121ec = document.createElement("htmlConfirmChangedMode");
        const _0x5aef2e = document.querySelector("#ds_body");
        _0x5aef2e.append(_0x3121ec);
        _0x3121ec.innerHTML = "\n                <div id=\"fader\" style=\"z-index: 14999;\">\n                <div class=\"confirmation-box\" id=\"premium_exchange\" role=\"dialog\" aria-labelledby=\"confirmation-msg\">\n                    <div class=\"confirmation-box-content-pane\" style=\"max-height: 869px;\">\n                        <div class=\"confirmation-box-content\" style=\"overflow: auto; height: auto;\">\n                            <div id=\"confirmation-msg\" class=\"confirmation-msg\">\n                                <div style=\"text-align: center\">\n                                    <h3 style=\"margin-top: 0;font-size: 12px;font-family: inherit;color: red;font-weight: 800;letter-spacing: 0.5px;\">Deseja ativar o Modo Script? Os gastos de pontos premium nesse modo são de forma acelerada.\n                                    Ele vai comprar 100% do seu armazém sempre que possível, e isso pode eliminar seus pontos premium em poucos segundos a depender do tempo de mundo.</h3>\n                                    <table class=\"vis\" style=\"width: 100%\">\n                                        <tbody>\n                                        </tbody>\n                                    </table></div>\n                                    <div class=\"confirmation-buttons\">\n                                        <button class=\"btn evt-confirm-btn btn-confirm-yes\" aria-label'confirmar'=\"\">Confirmar</button>\n                                        <button class=\"btn evt-cancel-btn btn-confirm-no\" aria-label'cancel'=\"\">Cancelar</button>\n                                    </div>\n                                </div>\n                                <div>\n                                <p> Na dúvida, entre em contato para evitar gastos exagerados de pontos premium! </p>\n                                <a href=\"https://api.whatsapp.com/send?phone=5585981880903\" target=\"_blank>\">Suporte WhatsApp</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>";
        const _0x26c6fa = document.querySelector(".confirmation-buttons button");
        const _0x4b61c7 = document.querySelector(".btn.evt-cancel-btn.btn-confirm-no");
        _0x26c6fa.addEventListener("click", () => {
          inputStorage("OptionMarket " + game_data.village.id, 2);
          option.value = "Compra: Modo Script";
          option.classList = "btn evt-confirm-btn btn-confirm-yes";
          document.querySelector("htmlconfirmchangedmode").style.display = "none";
          _0x41cf1d();
        });
        _0x4b61c7.addEventListener("click", () => {
          document.querySelector("htmlconfirmchangedmode").style.display = "none";
          _0x41cf1d();
        });
      } else {
        inputStorage("OptionMarket " + game_data.village.id, 0);
        option.value = "Compra desativada";
        option.classList = "btn evt-confirm-btn btn-confirm-no";
        _0x41cf1d();
      }
    }
  }
  function _0x1990ca() {
    if (outputStorage("SellMarket " + game_data.village.id) == 1) {
      inputStorage("SellMarket " + game_data.village.id, 0);
      vender.value = "Vendas Desativada";
      vender.classList = "btn evt-confirm-btn btn-confirm-no";
      _0x41cf1d();
    } else {
      inputStorage("SellMarket " + game_data.village.id, 1);
      vender.value = "Vendas Ativada";
      vender.classList = "btn evt-confirm-btn btn-confirm-yes";
      _0x41cf1d();
    }
  }
  function _0x4fd741() {
    resources = ["wood", "stone", "iron"];
    stock = [];
    capacity = [];
    rate = [];
    rateResources = [];
    rateResourcersForBuyUser = [];
    rateForBuy = [];
    rateForBuyId = [];
    for (let _0x2bcc4c = 0; _0x2bcc4c < resources.length; _0x2bcc4c++) {
      let _0x4288b5 = parseInt(document.querySelector("#premium_exchange_stock_" + resources[_0x2bcc4c]).textContent);
      let _0x2fb913 = parseInt(document.querySelector("#premium_exchange_capacity_" + resources[_0x2bcc4c]).textContent);
      let _0x10aaf5 = parseInt(document.querySelector("#premium_exchange_rate_" + resources[_0x2bcc4c]).querySelectorAll(".premium-exchange-sep")[0].textContent);
      let _0x1e8d52 = parseInt(document.querySelector("#premium_exchange_rate_" + resources[_0x2bcc4c]).querySelectorAll(".premium-exchange-sep")[0].textContent * 0.8);
      stock[resources[_0x2bcc4c]] = _0x4288b5;
      capacity[resources[_0x2bcc4c]] = _0x2fb913;
      rate[resources[_0x2bcc4c]] = _0x10aaf5;
      rateResources[resources[_0x2bcc4c]] = _0x1e8d52;
      minParaCompra = 200;
      for (j = 0; j < 3; j++) {
        resourcesVillage = [rate.wood, rate.stone, rate.iron];
        inputsRateBuyUser = document.querySelector(".buy").querySelectorAll("input");
        idResources = inputsRateBuyUser[j].id.replace("buy", '');
        valueResources = parseInt(inputsRateBuyUser[j].value);
        if (valueResources <= [resourcesVillage[j]] && stock[idResources] > minParaCompra) {
          rateResourcersForBuyUser[resources[j]] = [valueResources, idResources];
        }
        let _0x178b88 = Object.values(rateResourcersForBuyUser);
        for (let _0x5d5fd6 = 0; _0x5d5fd6 < _0x178b88.length; _0x5d5fd6++) {
          let _0x5cf51f = _0x178b88[_0x5d5fd6][0];
          let _0x25c9ad = _0x178b88[_0x5d5fd6][1];
          rateForBuy[_0x5d5fd6] = _0x5cf51f;
          rateForBuyId[_0x25c9ad] = _0x25c9ad;
        }
      }
    }
    switch (Math.max(stock.wood, stock.stone, stock.iron)) {
      case stock.wood:
        highStock = [stock.wood, "wood"];
        rateResourcesBuy = rateResources.wood;
        rateResourcesBuyUser = rate.wood;
        break;
      case stock.stone:
        highStock = [stock.stone, "stone"];
        rateResourcesBuy = rateResources.stone;
        rateResourcesBuyUser = rate.stone;
        break;
      case stock.iron:
        highStock = [stock.iron, "iron"];
        rateResourcesBuy = rateResources.iron;
        rateResourcesBuyUser = rate.iron;
        break;
    }
  }
  async function _0x5ed248() {
    rateBuyWoodUser = parseInt(document.querySelector("#buywood").value);
    rateBuyStoneUser = parseInt(document.querySelector("#buystone").value);
    rateBuyIronUser = parseInt(document.querySelector("#buyiron").value);
    rateSellWood = parseInt(document.querySelector("#sellwood").value);
    rateSellStone = parseInt(document.querySelector("#sellstone").value);
    rateSellIron = parseInt(document.querySelector("#selliron").value);
    reserveWood = parseInt(document.querySelector("#reserveWood").value) || 0;
    reserveStone = parseInt(document.querySelector("#reserveStone").value) || 0;
    reserveIron = parseInt(document.querySelector("#reserveIron").value) || 0;
    maxSell = document.querySelector("#maxSell").value;
    maxBuyStorage = parseInt(document.querySelector("#maxstorage").value);
    limiteStorageBuy = parseInt(document.querySelector("#limiteStorage").value);
    woodArriving = parseInt(document.querySelector("#market_status_bar > table:nth-child(2) > tbody > tr > th:nth-child(1) span.icon.header.wood")?.["parentElement"]["innerText"]["replace"]('.', '')) || 0;
    stoneArriving = parseInt(document.querySelector("#market_status_bar > table:nth-child(2) > tbody > tr > th:nth-child(1) span.icon.header.stone")?.["parentElement"]["innerText"]["replace"]('.', '')) || 0;
    ironArriving = parseInt(document.querySelector("#market_status_bar > table:nth-child(2) > tbody > tr > th:nth-child(1) span.icon.header.iron")?.["parentElement"]["innerText"]["replace"]('.', '')) || 0;
    ppsArriving = parseInt(document.querySelector("#market_status_bar > table:nth-child(2) > tbody > tr > th:nth-child(1) span.icon.header.premium")?.["nextSibling"]["textContent"]["replace"]('.', '')) || 0;
    woodOuting = parseInt(document.querySelector("#market_status_bar > table:nth-child(2) > tbody > tr > th:nth-child(2) span.icon.header.wood")?.["parentElement"]["innerText"]["replace"]('.', '')) || 0;
    stoneOuting = parseInt(document.querySelector("#market_status_bar > table:nth-child(2) > tbody > tr > th:nth-child(2) span.icon.header.stone")?.["parentElement"]["innerText"]["replace"]('.', '')) || 0;
    ironOuting = parseInt(document.querySelector("#market_status_bar > table:nth-child(2) > tbody > tr > th:nth-child(2) span.icon.header.iron")?.["parentElement"]["innerText"]["replace"]('.', '')) || 0;
    ppsOuting = parseInt(document.querySelector("#market_status_bar > table:nth-child(2) > tbody > tr > th:nth-child(2) span.icon.header.premium")?.["nextSibling"]["textContent"]["replace"]('.', '')) || 0;
  }
  async function _0x5e5a99() {
    console.log("Check config sell");
    merchants = parseInt(market_merchant_max_transport.textContent);
    resourcesForSell = [];
    rateForSell = [];
    rateSellId = [];
    resourcesInVillage = [woodVillage, stoneVillage, ironVillage];
    reserveResources = [reserveWood, reserveStone, reserveIron];
    for (let _0x27466a = 0; _0x27466a < 3; _0x27466a++) {
      inputsSell = document.querySelector(".sell").querySelectorAll("input");
      valueInputsSell = parseInt(inputsSell[_0x27466a].value);
      nameInputsSell = inputsSell[_0x27466a].id.replace("sell", '');
      if (valueInputsSell >= [resourcesVillage[_0x27466a]] && resourcesInVillage[_0x27466a] - reserveResources[_0x27466a] > 660) {
        resourcesForSell[resources[_0x27466a]] = [valueInputsSell, nameInputsSell, resourcesInVillage[_0x27466a]];
      }
    }
    const _0x370f38 = Object.values(resourcesForSell);
    for (let _0xa53d03 = 0; _0xa53d03 < _0x370f38.length; _0xa53d03++) {
      rateSell = _0x370f38[_0xa53d03][0];
      nameResourceSell = _0x370f38[_0xa53d03][1];
      rateForSell[_0xa53d03] = rateSell;
      rateSellId[nameResourceSell] = nameResourceSell;
    }
  }
  function _0x4df28c() {
    woodVillage = parseInt(wood.textContent);
    stoneVillage = parseInt(stone.textContent);
    ironVillage = parseInt(iron.textContent);
    storageVillage = parseInt(game_data.village.storage_max);
  }
  _0x4df28c();
  function _0x424c86() {
    buyStockLargerStorage = parseInt(storageVillage / rateResourcesBuy) * rateResourcesBuy;
    buyStockSmallerStorage = parseInt(highStock[0] / rateResourcesBuy) * rateResourcesBuy;
  }
  error = 0;
  function _0x46de19() {
    console.log("Buying mode Script");
    inputBuyModeUser = document.querySelector("#premium_exchange_buy_" + highStock[1]).querySelectorAll(".premium-exchange-input")[0];
    if (highStock[0] >= storageVillage && buyStockLargerStorage > 0 && error != 1) {
      inputBuyModeUser.value = buyStockLargerStorage;
      _0x2e9966();
    } else if (buyStockSmallerStorage > 0 && error != 1) {
      inputBuyModeUser.value = buyStockSmallerStorage;
      _0x2e9966();
    }
  }
  function _0x37470f() {
    const _0xcbc75f = woodArriving + woodVillage;
    const _0x1784dd = stoneArriving + stoneVillage;
    const _0x341135 = ironArriving + ironVillage;
    if (rateForBuy.length > 0) {
      highRateUser = rateForBuy.reduce(function (_0x16ff96, _0x11188f) {
        return _0x16ff96 > _0x11188f ? _0x11188f : _0x16ff96;
      });
    } else {
      highRateUser = 0;
    }
    if (highRateUser == rateBuyWoodUser && _0xcbc75f < limiteStorageBuy && rateForBuyId.wood == "wood") {
      resourcesBuy = "wood";
      amountBuyUser = limiteStorageBuy - _0xcbc75f;
      stockResources = stock.wood;
      rr = rate.wood;
      _0x1b18ac();
    } else {
      if (highRateUser == rateBuyStoneUser && _0x1784dd < limiteStorageBuy && rateForBuyId.stone == "stone") {
        resourcesBuy = "stone";
        amountBuyUser = limiteStorageBuy - _0x1784dd;
        stockResources = stock.stone;
        rr = rate.stone;
        _0x1b18ac();
      } else {
        if (highRateUser == rateBuyIronUser && _0x341135 < limiteStorageBuy && rateForBuyId.iron == "iron") {
          resourcesBuy = "iron";
          amountBuyUser = limiteStorageBuy - _0x341135;
          stockResources = stock.iron;
          rr = rate.iron;
          _0x1b18ac();
        } else {
          if (highRateUser !== rateBuyWoodUser && rateBuyWoodUser <= rate.wood && _0xcbc75f < limiteStorageBuy && rateForBuyId.wood == "wood") {
            resourcesBuy = "wood";
            amountBuyUser = limiteStorageBuy - _0xcbc75f;
            stockResources = stock.wood;
            rr = rate.wood;
            _0x1b18ac();
          } else {
            if (highRateUser !== rateBuyStoneUser && rateBuyStoneUser <= rate.stone && _0x1784dd < limiteStorageBuy && rateForBuyId.stone == "stone") {
              resourcesBuy = "stone";
              amountBuyUser = limiteStorageBuy - _0x1784dd;
              stockResources = stock.stone;
              rr = rate.stone;
              _0x1b18ac();
            } else {
              if (highRateUser !== rateBuyIronUser && rateBuyIronUser <= rate.iron && _0x341135 < limiteStorageBuy && rateForBuyId.iron == "iron") {
                resourcesBuy = "iron";
                amountBuyUser = limiteStorageBuy - _0x341135;
                stockResources = stock.iron;
                rr = rate.iron;
                _0x1b18ac();
              }
            }
          }
        }
      }
    }
    function _0x1b18ac() {
      if (amountBuyUser > stockResources) {
        amountBuyUser = parseInt(stockResources / rr) * rr - rr;
      } else {
        amountBuyUser;
      }
      const _0x307bdc = document.querySelector("#premium_exchange_buy_" + resourcesBuy).querySelectorAll(".premium-exchange-input")[0];
      if (amountBuyUser > maxBuyStorage) {
        amountBuyUser = maxBuyStorage;
      } else {
        amountBuyUser;
      }
      _0x307bdc.value = parseInt(amountBuyUser);
      _0x2e9966();
    }
  }
  function _0x34c747() {
    const _0x26b471 = capacity.wood - stock.wood;
    const _0x5b89ce = capacity.stone - stock.stone;
    const _0x4651a3 = capacity.iron - stock.iron;
    if (rateForSell.length > 0) {
      minRateSell = rateForSell.reduce(function (_0x32d909, _0x2b1cb7) {
        return _0x32d909 > _0x2b1cb7 ? _0x2b1cb7 : _0x32d909;
      });
    } else {
      minRateSell = 0;
    }
    if (minRateSell == rateSellWood && rateSellId.wood == "wood" && merchants < woodVillage && merchants >= 1000 && rate.wood <= 900 && woodVillage > 600 && maxSell < _0x26b471) {
      resourcesSell = "wood";
      amountSellUser = Math.min(merchants - rate.wood * 1.05, _0x26b471 - maxSell, woodVillage - reserveWood);
      _0x383c0f();
    } else {
      if (minRateSell == rateSellStone && rateSellId.stone == "stone" && merchants < stoneVillage && merchants >= 1000 && rate.stone <= 900 && stoneVillage > 600 && maxSell < _0x5b89ce) {
        resourcesSell = "stone";
        amountSellUser = Math.min(merchants - rate.stone * 1.05, _0x5b89ce - maxSell, stoneVillage - reserveStone);
        _0x383c0f();
      } else {
        if (minRateSell == rateSellIron && rateSellId.iron == "iron" && merchants < ironVillage && merchants >= 1000 && rate.iron <= 900 && ironVillage > 600 && maxSell < _0x4651a3) {
          resourcesSell = "iron";
          amountSellUser = Math.min(merchants - rate.iron * 1.05, _0x4651a3 - maxSell, ironVillage - reserveIron);
          _0x383c0f();
        } else {
          if (minRateSell == rateSellWood && rateSellId.wood == "wood" && merchants >= woodVillage && merchants >= 1000 && woodVillage < _0x26b471 && woodVillage - reserveWood * 1 >= rate.wood * 1.05) {
            resourcesSell = "wood";
            amountSellUser = woodVillage - reserveWood - rate.wood;
            _0x383c0f();
          } else {
            if (minRateSell == rateSellStone && rateSellId.stone == "stone" && merchants >= stoneVillage && merchants >= 1000 && stoneVillage < _0x5b89ce && stoneVillage - reserveStone * 1 >= rate.stone * 1.05) {
              resourcesSell = "stone";
              amountSellUser = stoneVillage - reserveStone - rate.stone;
              _0x383c0f();
            } else {
              if (minRateSell == rateSellIron && rateSellId.iron == "iron" && merchants >= ironVillage && merchants >= 1000 && ironVillage < _0x4651a3 && ironVillage - reserveIron * 1 >= rate.iron * 1.05) {
                resourcesSell = "iron";
                amountSellUser = ironVillage - reserveIron - rate.iron;
                _0x383c0f();
              } else {
                if (woodVillage > _0x26b471 && merchants >= _0x26b471 && _0x26b471 > 0 && minRateSell > 0 && rateSellId.wood == "wood") {
                  resourcesSell = "wood";
                  amountSellUser = _0x26b471;
                  _0x383c0f();
                } else {
                  if (stoneVillage > _0x5b89ce && merchants >= _0x5b89ce && _0x5b89ce > 0 && minRateSell > 0 && rateSellId.stone == "stone") {
                    resourcesSell = "stone";
                    amountSellUser = _0x5b89ce;
                    _0x383c0f();
                  } else if (ironVillage > _0x4651a3 && merchants >= _0x4651a3 && _0x4651a3 > 0 && minRateSell > 0 && rateSellId.iron == "iron") {
                    resourcesSell = "iron";
                    amountSellUser = _0x4651a3;
                    _0x383c0f();
                  }
                }
              }
            }
          }
        }
      }
    }
    function _0x383c0f() {
      if (amountSellUser > 0) {
        inputSellModeUser = document.querySelector("#premium_exchange_sell_" + resourcesSell).querySelectorAll(".premium-exchange-input")[0];
        if (maxSell < amountSellUser && maxSell != 0) {
          document.getElementsByName("sell_wood")[0].value = '';
          document.getElementsByName("sell_stone")[0].value = '';
          document.getElementsByName("sell_iron")[0].value = '';
          inputSellModeUser.value = parseInt(maxSell);
        } else {
          inputSellModeUser.value = parseInt(amountSellUser);
        }
        _0x2e9966();
      }
    }
  }
  async function _0x23bab4() {
    console.log("Injecting HTML");
    const _0x5331ad = document.createElement("formMercado");
    const _0x33fc91 = document.createElement('a');
    const _0x17a36f = document.querySelector('h3');
    _0x17a36f.firstChild.remove();
    _0x17a36f.append(_0x33fc91);
    _0x17a36f.style.fontSize = "12px";
    _0x17a36f.append(_0x5331ad);
    p = document.querySelector("#content_value > table:nth-child(3) > tbody > tr > td:nth-child(2) > p");
    if (p) {
      p.remove();
    }
    _0x5331ad.innerHTML = "\n        <div class=\"botoes\" style=\"display: flex\"><input button class=\"btn evt-confirm-btn btn-confirm-no\" type=\"button\" id=\"iniciar\" value=\"Script Desativado\" title=\"Clique para ativar ou desativar as negociações.\"></input>\n        <input button class=\"btn evt-confirm-btn btn-confirm-no\" type=\"button\" id=\"option\" value=\"Sem modo definido\"   title=\"Clique para ativar modo automático de negociação ou valor definido por você.\"</input>\n        <input button class=\"btn evt-confirm-btn btn-confirm-no\" type=\"button\" id=\"vender\" value=\"Vendas desabilitadas\"  title=\"Clique para ativar ou desativar a venda de recursos.\"</input>\n        <input button class=\"btn evt-confirm-btn btn-confirm-yes\" type=\"button\" id=\"salvar\" value=\"Salvar Configuração\"  title=\"Salvar as configurações.\"></input></div>\n\n        <div class=\"buysell\">\n        <div class=\"buy\">\n        <div class=\"container\">\n            <label>\n                <div class=\"align-items\">\n                    Taxa Madeira\n                    <input class=\"inputbuy\" type=\"number\" id=\"buywood\" maxlength=\"3\" min=\"64\" value=\"\" title=\"Escolha a taxa desejada para comprar Madeira.\">\n                </div>\n            </label>\n            <label>\n                <div class=\"align-items\">\n                    Taxa Argila\n                    <input class=\"inputbuy\" type=\"number\" id=\"buystone\" maxlength=\"3\" min=\"64\" value=\"\" title=\"Escolha a taxa desejada para comprar Argila.\">\n                </div>\n            </label>\n            <label>\n                <div class=\"align-items\">\n                    Taxa Ferro\n                    <input class=\"inputbuy\" type=\"number\" id=\"buyiron\" maxlength=\"3\" min=\"64\" value=\"\" title=\"Escolha a taxa desejada para comprar Ferro.\">\n                </div>\n            </label>\n            <label>\n                <div class=\"align-items\">\n                    Compra por vez\n                    <input class=\"inputbuy\" type=\"number\" id=\"maxstorage\" maxlength=\"4\" min=\"0\" value=\"\" title=\"Escolha a quantidade máxima por compra\">\n                </div>\n            </label>\n            <label>\n                <div class=\"align-items\">\n                    Limite armazém\n                    <input class=\"inputbuy\" type=\"number\" id=\"limiteStorage\" maxlength=\"4\" min=\"0\" value=\"\" title=\"Escolha o limite de recursos para comprar em relação ao que tem na aldeia e o que tem chegando.\">\n                </div>\n            </label>\n        </div>\n        </div>\n    </div>\n\n        </div><div class=\"sell\"<br>\n\n        <div class=\"container\">\n        <label>\n            <div class=\"align-items\">\n                Taxa Madeira\n                <input class=\"inputsell\" type=\"number\" id=\"sellwood\" maxlength=\"3\" min=\"64\" value=\"\" title=\"Escolha a taxa desejada para vender Madeira.\">\n            </div>\n        </label>\n        <label>\n            <div class=\"align-items\">\n                Taxa Argila\n                <input class=\"inputsell\" type=\"number\" id=\"sellstone\" maxlength=\"3\" min=\"64\" value=\"\" title=\"Escolha a taxa desejada para vender Argila.\">\n            </div>\n        </label>\n        <label>\n            <div class=\"align-items\">\n                Taxa Ferro\n                <input class=\"inputsell\" type=\"number\" id=\"selliron\" maxlength=\"3\" min=\"64\" value=\"\" title=\"Escolha a taxa desejada para vender Ferro.\">\n            </div>\n        </label>\n        <br>\n        <label>\n            <div class=\"align-items\">\n                Reservar\n                <input class=\"inputsell\" type=\"number\" id=\"reserveWood\" maxlength=\"3\" min=\"0\" max=\"100\" value=\"\" title=\"Escolha a quantidade que deseja reservar de madeira\">\n            </div>\n        </label>\n        <label>\n            <div class=\"align-items\">\n                Reservar\n                <input class=\"inputsell\" type=\"number\" id=\"reserveStone\" maxlength=\"3\" min=\"0\" max=\"100\" value=\"\" title=\"Escolha a quantidade que deseja reservar de argila\">\n            </div>\n        </label>\n        <label>\n            <div class=\"align-items\">\n                Reservar\n                <input class=\"inputsell\" type=\"number\" id=\"reserveIron\" maxlength=\"3\" min=\"0\" max=\"100\" value=\"\" title=\"Escolha a quantidade que deseja reservar de ferro\">\n            </div>\n        </label>\n        <label>\n            <div class=\"align-items\">\n                Limite de venda\n                <input class=\"inputsell\" type=\"number\" id=\"maxSell\" maxlength=\"3\" min=\"0\" max=\"282000\" value=\"\" title=\"Escolha a quantidade máxima por venda\">\n            </div>\n        </label>\n    </div>\n\n\n        </div></div>\n        <style>\n\n        .container {\n            display: flex;\n            font-size: 8pt;\n            font-size: 9pt;\n            text-align: left;\n            font-weight: 700;\n            background-color: #c1a264 !important;\n            background-image: url(https://dspt.innogamescdn.com/asset/4d47dbcf/graphic/screen/tableheader_bg3.png);\n            background-repeat: repeat-x;\n            position: relative;\n        }\n\n        .inputsell {\n            width: 30%;\n            margin: 10px 0;\n            text-align: center;\n        }\n\n        label {\n            text-align: center;\n            margin-bottom: 3px;\n            font-size: 15px;\n        }\n        .align-items{\n            display: grid;\n            margin-bottom: 3px;\n            background: #f4e4bc;\n            padding: 7px;\n        }\n\n        h3 {\n           font-size: 1pt;\n        }\n\n        .btn-confirm-yes{\n            font-size: 45px;\n        }\n\n        .mbtn {\n            border: 1px solid #0080ff;\n            box-shadow: 0 0 40px 40px rgb(38 38 38) inset, inset 0px 0px 0 0 #ffffff;\n            -webkit-transition: all 150ms ease-in-out;\n            transition: all 150ms ease-in-out;\n            display: inline-block;\n            padding: 8px;\n            font-Size: 15px;\n            font-Weight: bolder;\n            cursor: pointer;\n            border-Radius: 5px;\n            margin: 3px;\n            line-Height: normal;\n        }\n        .mbtn:hover{\n            box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;\n        }\n        .inputbuy {\n            border: 1px solid #ced4da;\n            background-clip: padding-box;\n            padding: 2px 4px;\n            color: #000000;\n            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n            margin: 2px;\n            width: 125px;\n            font-size: 20px;\n            height: 22px;\n            background-color: #63ed55;\n            border-radius: 10px;\n            text-align: center;\n            letter-spacing: 1px;\n            font-weight: 800;\n            line-Height: normal;\n        }\n        .inputsell {\n            border: 1px solid #ced4da;\n            background-clip: padding-box;\n            padding: 2px 4px;\n            color: #000000;\n            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n            margin: 2px;\n            width: 125px;\n            font-size: 20px;\n            height: 22px;\n            background-color: #ff0000;\n            border-radius: 10px;\n            text-align: center;\n            letter-spacing: 1px;\n            font-weight: 800;\n        }\n        .buysell {\n            display: flex;\n        }\n        .buy {\n            display: flex;\n            flex-wrap: nowrap;\n            justify-content: flex-start;\n            align-content: flex-start;\n        }\n\n        .sell {\n            display: flex;\n            flex-wrap: nowrap;\n            justify-content: flex-start;\n            align-content: flex-start;\n        }\n        #salvar{\n            background: blue;\n        }\n        #salvar:hover{\n            box-shadow: 0 0 1px 0 #3498db inset, 0 0 10px 1px #3498db;\n        }\n\n        input.inputsell {\n            border-bottom: 1px solid black; /* adiciona uma linha preta, sólida, de 1px abaixo do elemento */\n        }\n\n        #reserveWood, #reserveStone, #reserveIron, #maxSell {\n            display: block;\n            border-bottom: 1px solid black; /* adiciona uma linha preta, sólida, de 1px abaixo do elemento */\n        }\n\n\n\n        #buywood, #buystone, #buyiron, #maxstorage, #limiteStorage, #sellwood, #sellstone, #selliron, #reserveWood, #reserveStone, #reserveIron, #maxSell, #limitPoints{\n            padding: 6px;\n        }\n\n        #buywood {\n            background: #52EC47;\n            background-image: url(https://dsxs.innogamescdn.com/asset/fd617e91/graphic/resources/wood_21x18.png);\n            background-repeat: no-repeat;\n            background-position: left;\n        }\n\n        #buystone {\n            background: #52EC47;\n            background-image: url(https://dsxs.innogamescdn.com/asset/fd617e91/graphic/resources/stone_21x18.png);\n            background-repeat: no-repeat;\n            background-position: left;\n        }\n\n        #buyiron {\n            background: #52EC47;\n            background-image: url(https://dsxs.innogamescdn.com/asset/fd617e91/graphic/resources/iron_21x18.png);\n            background-repeat: no-repeat;\n            background-position: left;\n        }\n\n        #maxstorage, #limiteStorage {\n            background: #52EC47;\n            background-image: url(https://dsxs.innogamescdn.com/asset/fd617e91/graphic/buildings/storage.png);\n            background-repeat: no-repeat;\n            background-position: left;\n        }\n\n        #sellwood, #reserveWood {\n            background: #ff0000;\n            background-image: url(https://dsxs.innogamescdn.com/asset/fd617e91/graphic/resources/wood_21x18.png);\n            background-repeat: no-repeat;\n            background-position: left;\n        }\n        #sellstone, #reserveStone {\n            background: #ff0000;\n            background-image: url(https://dsxs.innogamescdn.com/asset/fd617e91/graphic/resources/stone_21x18.png);\n            background-repeat: no-repeat;\n            background-position: left;\n        }\n        #selliron, #reserveIron {\n            background: #ff0000;\n            background-image: url(https://dsxs.innogamescdn.com/asset/fd617e91/graphic/resources/iron_21x18.png);\n            background-repeat: no-repeat;\n            background-position: left;\n        }\n        #limitPoints {\n            background: #52EC47;\n            background-image: url(https://dsbr.innogamescdn.com/asset/4d47dbcf/graphic/premium/coinbag_18x18.png);\n            background-repeat: no-repeat;\n            background-position: left;\n        }\n\n        #buywood:focus {\n           background-color: cornsilk;\n        }\n        #buystone:focus {\n           background-color: cornsilk;\n        }\n        #buyiron:focus {\n           background-color: cornsilk;\n        }\n        #maxstorage:focus {\n           background-color: cornsilk;\n        }\n        #reserveWood:focus {\n           background-color: cornsilk;\n        }\n        #reserveStone:focus {\n            background-color: cornsilk;\n        }\n         #reserveIron:focus {\n            background-color: cornsilk;\n        }\n        #sellwood:focus {\n           background-color: cornsilk;\n        }\n        #sellstone:focus {\n           background-color: cornsilk;\n        }\n        #selliron:focus {\n           background-color: cornsilk;\n        }\n        #limiteStorage {\n            width: 135px\n        }\n        #limiteStorage:focus {\n           background-color: cornsilk;\n        }\n        #salvar {\n           color: #ffbf00\n        }\n        .contact{\n            border: none;\n            width: 15px;\n        }\n        </style>\n        ";
  }
  _0x23bab4();
function _0xdc2ff7() {
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

function _0x3e7359() {
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

// Event Listener for Save Button
document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.querySelector("#salvar");
    if (saveButton) {
        saveButton.addEventListener("click", _0xdc2ff7);
    }
    _0x3e7359();
});
  async function _0x51b0d6() {
    if (outputStorage("ActiveMarket " + game_data.village.id) == 1) {
      start.value = "Script Ativado";
      start.classList = "btn evt-confirm-btn btn-confirm-yes";
      if (location.search.includes("&screen=market&mode=exchange")) {
        _0x4fd741();
        _0x5ed248();
        _0x5aef2a();
      } else {
        console.log("Load only functions essentials the config");
      }
    } else {
      start.value = "Script Desativado";
      start.classList = "btn evt-confirm-btn btn-confirm-no";
    }
  }
  _0x51b0d6();
  function _0x68ca35() {
    function _0x42b139() {
      if (outputStorage("SellMarket " + game_data.village.id) == 1) {
        vender.value = "Vendas Ativada";
        vender.classList = "btn evt-confirm-btn btn-confirm-yes";
        if (location.search.includes("&screen=market&mode=exchange") && outputStorage("SellMarket " + game_data.village.id) == 1 && outputStorage("ActiveMarket " + game_data.village.id) == 1) {
          _0x4fd741();
          _0x5ed248();
          _0x5e5a99();
          _0x34c747();
          timeInterval = 800;
          if (game_data.world == "ptp5") {
            timeInterval = 1000;
          }
          setInterval(() => {
            _0x4fd741();
            _0x5ed248();
            _0x5e5a99();
            _0x34c747();
          }, timeInterval);
        }
      } else {
        vender.value = "Vendas Desativada";
        vender.classList = "btn evt-confirm-btn btn-confirm-no";
      }
    }
    function _0x412e65() {
      if (outputStorage("OptionMarket " + game_data.village.id) == 2) {
        option.value = "Compra: Modo Script";
        option.classList = "btn evt-confirm-btn btn-confirm-yes";
        if (location.search.includes("&screen=market&mode=exchange") && outputStorage("ActiveMarket " + game_data.village.id) == 1) {
          _0x4fd741();
          _0x4df28c();
          _0x424c86();
          _0x46de19();
          setInterval(() => {
            if (error != 1) {
              _0x4fd741();
              _0x4df28c();
              _0x424c86();
              _0x46de19();
            }
          }, 300, 400);
        }
      } else if (outputStorage("OptionMarket " + game_data.village.id) == 1) {
        option.value = "Compra: Modo Usuário";
        option.classList = "btn evt-confirm-btn btn-confirm-yes";
        if (location.search.includes("&screen=market&mode=exchange") && outputStorage("ActiveMarket " + game_data.village.id) == 1) {
          _0x37470f();
          setInterval(() => {
            if (error != 1) {
              _0x5ed248();
              _0x4fd741();
              _0x4df28c();
              _0x37470f();
            }
          }, 300, 400);
        }
      } else {
        option.value = "Compra desativada";
        option.classList = "btn evt-confirm-btn btn-confirm-no";
        inputStorage("OptionMarket " + game_data.village.id, 0);
      }
    }
    _0x42b139();
    _0x412e65();
  }
  _0x68ca35();
  async function _0x2e9966() {
    document.querySelector(".btn-premium-exchange-buy").click();
    setTimeout(() => {
      if (document.querySelector(".autoHideBox.error")) {
        console.log("Fixing Error");
        error = 1;
        setTimeout(() => {
          document.querySelector(".autoHideBox.error")?.["click"]();
          console.log("Checking new negotiation");
          location.reload();
        }, 2000);
      }
    }, 333);
    if (!document.querySelector(".autoHideBox.error")) {
      _0x499a37();
    }
  }
  async function _0x499a37() {
    let _0x176829 = setInterval(() => {
      const _0x40e4a2 = document.querySelector("button.btn.evt-confirm-btn.btn-confirm-yes");
      if (_0x40e4a2) {
        clearInterval(_0x176829);
        _0x40e4a2.click();
      }
    }, 100);
    let _0x305cdd = setInterval(() => {
      const _0x2bf0d = document.querySelector("#confirmation-msg").querySelector(".warn");
      if (_0x2bf0d) {
        clearInterval(_0x305cdd);
        clearInterval(_0x176829);
        location.reload();
      }
    }, 500);
  }
}
