$(document).ready(function () {
  //    hover-menu-overlay--------------------------
  $("li.nav-overlay").hover(
    function () {
      $(".mega-menu-level-two").removeClass("active");
      $(".nav-categories-overlay").addClass("active");
    },
    function () {
      $(".nav-categories-overlay").removeClass("active");
    }
  );

  //    resposive-megamenu-mobile------------------
  $(".dropdown-toggle").on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();

    var self = $(this);
    if (self.is(".disabled, :disabled")) {
      return false;
    }
    self.parent().toggleClass("open");
  });

  $(document).on("click", function (e) {
    if ($(".dropdown").hasClass("open")) {
      $(".dropdown").removeClass("open");
    }
  });

  $(".nav-btn.nav-slider").on("click", function () {
    $(".overlay").show();
    $("nav").toggleClass("open");
  });

  $(".overlay").on("click", function () {
    if ($("nav").hasClass("open")) {
      $("nav").removeClass("open");
    }
    $(this).hide();
  });

  $("li.active").addClass("open").children("ul").show();
  $("li.has-sub > a").on("click", function () {
    $(this).removeAttr("href");
    var e = $(this).parent("li");
    if (e.hasClass("open")) {
      e.removeClass("open");
      e.find("li").removeClass("opne");
      e.find("ul").slideUp(200);
    } else {
      e.addClass("open");
      e.children("ul").slideDown(200);
      e.siblings("li").children("ul").slideUp(200);
      e.siblings("li").removeClass("open");
      e.siblings("li").find("li").removeClass("open");
      e.siblings("li").find("ul").slideUp(200);
    }
  });
  //    resposive-megamenu-mobile------------------

  // slider-product------------------------
  $(".product-carousel").owlCarousel({
    rtl: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      576: {
        items: 1,
        slideBy: 1,
      },
      768: {
        items: 3,
        slideBy: 2,
      },
      992: {
        items: 4,
        slideBy: 2,
      },
      1400: {
        items: 4,
        slideBy: 3,
      },
    },
  });

  // brand---------------------------------------
  $(".product-carousel-brand").owlCarousel({
    items: 4,
    rtl: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      576: {
        items: 1,
        slideBy: 1,
      },
      768: {
        items: 3,
        slideBy: 2,
      },
      992: {
        items: 5,
        slideBy: 2,
      },
      1400: {
        items: 5,
        slideBy: 3,
      },
    },
  });
  // brand---------------------------------------

  // Symbol--------------------------------------
  $(".product-carousel-symbol").owlCarousel({
    rtl: true,
    items: 2,
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
        autoplay: true,
      },
      576: {
        items: 1,
        slideBy: 1,
        autoplay: true,
      },
      768: {
        items: 1,
        slideBy: 1,
        autoplay: true,
      },
      992: {
        items: 1,
        slideBy: 1,
        autoplay: true,
      },
      1400: {
        items: 1,
        slideBy: 1,
        autoplay: true,
      },
    },
  });
  // Symbol--------------------------------------

  $("#suggestion-slider").owlCarousel({
    rtl: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    dots: false,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar,
  });

  function startProgressBar() {
    $(".slide-progress").css({
      width: "100%",
      transition: "width 5000ms",
    });
  }

  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s",
    });
  }

  // sidebar-sticky-------------------------
  if ($(".sticky-sidebar").length > 0) {
    $(".sticky-sidebar").theiaStickySidebar();
  }

  //   countdown----------------------------
  !(function (l) {
    var t = {
      init: function () {
        t.countDown();
      },
      countDown: function (t, i) {
        l(".countdown").each(function () {
          var t = l(this),
            a = l(this).data("date-time"),
            e = l(this).data("labels");
          (i || t).countdown(a, function (t) {
            l(this).html(
              t.strftime(
                '<div class="countdown-item"><div class="countdown-value">%D</div><div class="countdown-label">' +
                  e["label-day"] +
                  '</div></div><div class="countdown-item"><div class="countdown-value">%H</div><div class="countdown-label">' +
                  e["label-hour"] +
                  '</div></div><div class="countdown-item"><div class="countdown-value">%M</div><div class="countdown-label">' +
                  e["label-minute"] +
                  '</div></div><div class="countdown-item"><div class="countdown-value">%S</div><div class="countdown-label">' +
                  e["label-second"] +
                  "</div></div>"
              )
            );
          });
        });
      },
    };
    l(function () {
      t.init();
    });
  })(jQuery);
  const cd = new Date().getFullYear() + 1;
  $("#countdown").countdown({
    year: cd,
  });

  // checkout-coupon-------------------------------
  $(".showcoupon").on("click", function () {
    $(".checkout-coupon").slideToggle(200);
  });
  // checkout-coupon-------------------------------

  // add-product-wishes----------------------------
  $("ul.gallery-actions li .add-product-wishes").on("click", function () {
    $(this).toggleClass("active");
  });
  // add-product-wishes----------------------------

  // nice-select-----------------------------------
  if ($(".custom-select-ui").length) {
    $(".custom-select-ui select").niceSelect();
  }

  //    price-range--------------------------------
  var nonLinearStepSlider = document.getElementById("slider-non-linear-step");

  if ($("#slider-non-linear-step").length) {
    noUiSlider.create(nonLinearStepSlider, {
      start: [0, 5000000],
      connect: true,
      direction: "rtl",
      format: wNumb({
        decimals: 0,
        thousand: ",",
      }),
      range: {
        min: [0],
        "10%": [500, 500],
        "50%": [40000, 1000],
        max: [10000000],
      },
    });
    var nonLinearStepSliderValueElement = document.getElementById(
      "slider-non-linear-step-value"
    );

    nonLinearStepSlider.noUiSlider.on("update", function (values) {
      nonLinearStepSliderValueElement.innerHTML = values.join(" - ");
    });
  }
  //    price-range--------------------------

  //    quantity-selector--------------------
  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  //    quantity-selector---------------------------

  // scroll_progress-------------------------

  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 1500;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });

  //    verify-phone-number------------------------
  if ($("#countdown-verify-end").length) {
    var $countdownOptionEnd = $("#countdown-verify-end");

    $countdownOptionEnd.countdown({
      date: new Date().getTime() + 180 * 1000, // 1 minute later
      text: '<span class="day">%s</span><span class="hour">%s</span><span>: %s</span><span>%s</span>',
      end: function () {
        $countdownOptionEnd.html(
          "<a href='' class='link-border-verify form-account-link'>ارسال مجدد</a>"
        );
      },
    });
  }
  $(".line-number-account").keyup(function () {
    $(this).next().focus();
  });
  //    verify-phone-number-----------------------

  // tab-------------------------------------
  $(".mask-handler").click(function (e) {
    e.preventDefault();
    var sumaryBox = $(this).parents(".content-expert-summary");
    sumaryBox.find(".mask-text").toggleClass("active");
    sumaryBox.find(".shadow-box").fadeToggle(0);
    $(this).find(".show-more").fadeToggle(0);
    $(this).find(".show-less").fadeToggle(0);
  });

  $(".content-expert-button").click(function (e) {
    e.preventDefault();
    var sumaryBox = $(this).parents(".content-expert-article");
    sumaryBox.find(".content-expert-article").toggleClass("active");
    sumaryBox.find(".content-expert-text").slideToggle();
    $(this).find(".show-more").fadeToggle(0);
    $(this).find(".show-less").fadeToggle(0);
  });
  // tab-------------------------------------

  // product-img-----------------------------
  $("#gallery-slider").owlCarousel({
    rtl: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
        slideBy: 1,
      },
    },
  });

  $(".back-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800, "easeInExpo");
  });

  if ($("#img-product-zoom").length) {
    $("#img-product-zoom").ezPlus({
      zoomType: "inner",
      containLensZoom: true,
      gallery: "gallery_01f",
      cursor: "crosshair",
      galleryActiveClass: "active",
      responsive: true,
      imageCrossfade: true,
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 500,
    });
  }
});
// Remove Product tr
$(".remove").on("click", function (event) {
  $(this).parent().parent().parent().parent().remove();
});

// Remove Address div
$(".btn-remove-address").on("click", function (event) {
  $(this).parent().parent().parent().remove();
});

// Accordian
const accor = document.querySelectorAll(".accordion-title");
accor.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    const content = item.nextElementSibling;
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
});

[
  // prettier-ignore
  {supported: 'Symbol' in window, fill: 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js'},
  {
    supported: "Promise" in window,
    fill: "https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js",
  },
  {
    supported: "fetch" in window,
    fill: "https://cdn.jsdelivr.net/npm/fetch-polyfill@0.8.2/fetch.min.js",
  },
  {
    supported:
      "CustomEvent" in window &&
      "log10" in Math &&
      "sign" in Math &&
      "assign" in Object &&
      "from" in Array &&
      ["find", "findIndex", "some", "includes"].reduce(function (
        previous,
        prop
      ) {
        return prop in Array.prototype ? previous : false;
      },
      true),
    fill: "https://unpkg.com/filepond-polyfill/dist/filepond-polyfill.js",
  },
].forEach(function (p) {
  if (p.supported) return;
  document.write('<script src="' + p.fill + '"></script>');
});

// Get a reference to the file input element
const inputElement = document.querySelector('input[type="file"]');

// Create the FilePond instance
// const pond = FilePond.create(inputElement, {
//     allowMultiple: true,
//     allowReorder: true,
// });

// Easy console access for testing purposes
// window.pond = pond;

// We want to preview images, so we register
// the Image Preview plugin, We also register
// exif orientation (to correct mobile image
// orientation) and size validation, to prevent
// large files from being added
// FilePond.registerPlugin(
//   FilePondPluginImagePreview,
//   FilePondPluginImageExifOrientation,
//   FilePondPluginFileValidateSize,
//   FilePondPluginImageEdit
// );

// Select the file input and use
// create() to turn it into a pond
// FilePond.create(
//   document.querySelector('input')
// );

// How to use with Pintura Image Editor:
// https://pqina.nl/pintura/docs/latest/getting-started/installation/filepond/

am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
    })
  );

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set(
    "cursor",
    am5xy.XYCursor.new(root, {
      behavior: "zoomX",
    })
  );
  cursor.lineY.set("visible", false);

  var date = new Date();
  date.setHours(0, 0, 0, 0);
  var value = 100;

  function generateData() {
    value = Math.round(Math.random() * 10 - 5 + value);
    am5.time.add(date, "day", 1);
    return {
      date: date.getTime(),
      value: value,
    };
  }

  function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      maxDeviation: 0,
      baseInterval: {
        timeUnit: "day",
        count: 1,
      },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {}),
    })
  );

  var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {}),
    })
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}",
      }),
    })
  );

  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  chart.set(
    "scrollbarX",
    am5.Scrollbar.new(root, {
      orientation: "horizontal",
    })
  );

  var data = generateDatas(50);
  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);
}); // end am5.ready()

// Live Character
let textArea = document.querySelector("#textarea");
let count = document.querySelector(".count");

let charLength;

textArea.addEventListener("input", () => {
  charLength = textArea.value.length;
  count.innerText = charLength;
});
