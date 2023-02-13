/**
 * источник скриптов https://github.com/spureful/D-Dexmpl
 *  *  https://youtu.be/j9IfEYrxoNA */

(function dragDrop() {
  let coordX;
  let coordY;

  const dragEl =
    document.querySelector(".drag_el"); /* получаем ссылку на синий квадратик */
  const dropZone =
    document.querySelector(
      ".drap-zone"
    ); /* получаем ссылку на специальную зону для перетаскивания */

  /* устанавливаем возможность перетаскивать элемент мышкой по документу, но элемент вернется обратно после отпускания праой кнопки мышки */
  dragEl.draggable = true;

  /* обработки события начала перетаскивания объекта -> dragstart */
  dragEl.addEventListener("dragstart", (e) => {
    /* dataTransfer - специальный объект который содержит информацию используемую в операции перетаскивания для других браудеров, чтобы далее получить координаты X и Y объекта */
    e.dataTransfer.setData("text/html", "dragstart");

    /* устанавливаем абсолютные координаты у синего квадратика */
    dragEl.style.position = "absolute";

    /* получаем координаты мышки внутри синего квадратика */
    coordX = e.offsetX;
    coordY = e.offsetY;

    /* выводим координаты мышки внутри синего квадратика в консоль */
    console.log("start: X = " + coordX + "; Y = " + coordY + ";");
  });

  /* обработка события конца перетаскивания -> dragend */
  dragEl.addEventListener("dragend", (e) => {
    /** выводим абсолютные координаты мышки объекта - синего квадратика */
    console.log("dragend: X = " + e.pageX + "; Y = " + e.pageY + ";");

    /* устанавливаем абсолютные координаты у элемента в общей зоне */
    // dragEl.style.position = "absolute";
    // dragEl.style.top = e.pageY - coordY + "px";
    // dragEl.style.left = e.pageX - coordX + "px";
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault(); /* чтобы разрешить упасть в новой (dropZone) зоне, по событию "drop" нужно применить  preventDefault() по событию "dragover" */
  });

  // Дроп элемента на в определенной заданной зоне
  dropZone.addEventListener("drop", (e) => {
    console.log("dropZone");
    dragEl.style.position = "absolute";
    dragEl.style.top = e.pageY - coordY + "px";
    dragEl.style.left = e.pageX - coordX + "px";
  });

  // Дроп элемента на любой области документа
  //		dragEl.addEventListener('dragend ', (e) => {
  //		dragEl.style.position = 'absolute';
  //		dragEl.style.top = (e.pageY - coordY) + 'px';
  //		dragEl.style.left = (e.pageX - coordX) + 'px';

  //	})
})();

// dragEl.addEventListener("dragstart", (e) => { } /* события обрабатываются такой функцией */
//dragstart /* событие начала перетаскивания элемента */
//drag		/* событие происходит когда происходит передвижение квадратика по зоне с зажатой правой клавишей мышки */
//dragend	/* событие происходит когда пользователь отпускает передвинутый элемент dragEl.addEventListener("dragstart", (e) => { */

//---------

//dragenter /* перетаскиваемый объект попадает в целевую зону */
//dragleave /* перетаскиваемый объект покидает целевую зону */
//dragover	/* когда объект находится над целевой зоной */
//drop		/* происходит когда объект падает в целевой зоне */
