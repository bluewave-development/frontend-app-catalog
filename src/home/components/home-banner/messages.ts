import { defineMessages } from "@edx/frontend-platform/i18n";

const messages = defineMessages({
  title: {
    id: "catalog.home-page.title",
    defaultMessage: "Blue Wave Academy",
    description:
      "[BW Custom]Main heading text displayed at the banner of the home page.",
  },
  subtitle: {
    id: "catalog.home-page.subtitle",
    defaultMessage: "",
    description:
      "[BW Custom]Secondary text displayed below the main heading on the home page.",
  },
  searchPlaceholder: {
    id: "catalog.home-page.search-placeholder",
    defaultMessage: "Search for a workshop",
    description:
      "[BW Custom]Placeholder text inside the course search input field.",
  },
  searchButton: {
    id: "catalog.home-page.search-button",
    defaultMessage: "Search",
    description:
      "[BW Custom]Text displayed on the search submit button.",
  },
  videoButton: {
    id: "catalog.home-page.video-button",
    defaultMessage: "View promo video",
    description: "Label for the button that opens the promotional video modal.",
  },
  videoButtonAlt: {
    id: "catalog.home-page.video-button-alt",
    defaultMessage: "search button",
    description:
      "Alternative text for the promo video button (for screen readers).",
  },
});

export default messages;
