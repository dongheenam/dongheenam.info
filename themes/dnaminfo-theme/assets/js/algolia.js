const searchClient = algoliasearch(
  "RY4ML0CGWE",
  "46ee98519046ea169848946fb8feab88"
);
const search = instantsearch({
  indexName: "dongheenam_info",
  searchClient,
});

// Create the custom hits widget
const renderHits = (renderOptions, isFirstRender) => {
  const { hits, widgetParams } = renderOptions;
  let results = "";
  if (hits.length == 0) {
    results = "<p>No results found!<p>";
  } else {
    results = `${hits
      .map(
        (item) =>
          `
        <div class="section-page-post">
        <div class="date">(${item.section})</div><h2>
        <a href="${item.href}">${instantsearch.highlight({
            attribute: "title",
            hit: item,
          })}</a>
        </h2>
        </div>
        <p class="subtitle">${instantsearch.highlight({
          attribute: "description",
          hit: item,
        })}</p>
      `
      )
      .join("")}`;
  }
  widgetParams.container.innerHTML = results;
};
const customHits = instantsearch.connectors.connectHits(renderHits);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#search-box",
    placeholder: "type keywords...",
    searchAsYouType: false,
    showReset: false,
    showLoadingIndicator: false,
    templates: {
      submit: "submit",
    },
  }),

  instantsearch.widgets.refinementList({
    container: "#refinement-list-section",
    attribute: "section",
    operator: "and",
    templates: {
      item: `
        <label for="{{ value }}" >
          <input type="checkbox" value="{{ value }}" id="{{ value }}" hidden>
          <span style="{{#isRefined}}color: var(--primary-color){{/isRefined}}">{{ label }}</span><sup>{{ count }}</sup>
        </label>
      `,
    },
  }),
  instantsearch.widgets.refinementList({
    container: "#refinement-list-tag",
    attribute: "tags",
    operator: "and",
    templates: {
      item: `
        <label for="{{ value }}" >
          <input type="checkbox" value="{{ value }}" id="{{ value }}" hidden>
          <span style="{{#isRefined}}color: var(--primary-color){{/isRefined}}">{{ label }}</span><sup>{{ count }}</sup>
        </label>
      `,
    },
  }),

  customHits({
    container: document.querySelector("#hits"),
  }),

  instantsearch.widgets.pagination({
    container: "#pagination",
    scrollTo: "#search-box",
    templates: {
      first: "««",
      previous: "«",
      next: "»",
      last: "»»",
    },
    cssClasses: {
      list: "pagination",
      item: "page-item",
      selectedItem: "active",
      disabledItem: "disabled",
    },
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 10,
    facets: ["tags", "section"],
  }),
]);

search.start();
console.log("search initiated");
