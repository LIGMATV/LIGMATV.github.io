let defaultDocsifyUpdatedOptions = {
  text: ">Last Modify: {docsify-updated} | Created: {docsify-created}",
  formatUpdated: "{YYYY}/{MM}/{DD}",
  formatCreated: "{YYYY}/{MM}/{DD}",
  whereToPlace: "bottom"
}

function formatDate(date, format) {
  let d = new Date(date);
  return format.replace("{YYYY}", d.getFullYear())
               .replace("{MM}", String(d.getMonth() + 1).padStart(2, '0'))
               .replace("{DD}", String(d.getDate()).padStart(2, '0'));
}

function plugin(hook, vm) {
  let textTemplate = vm.config.timeUpdater.text;
  let whereToPlace = String(vm.config.timeUpdater.whereToPlace).toLowerCase();
  let formatUpdated = vm.config.timeUpdater.formatUpdated;
  let formatCreated = vm.config.timeUpdater.formatCreated;

  hook.beforeEach(function (content) {
    let updatedDate = new Date().toISOString().split('T')[0]; // Mocked updated date
    let createdDateMatch = content.match(/\[date-created\]:\s*(\d{4}\/\d{2}\/\d{2})/);
    let createdDate = createdDateMatch ? createdDateMatch[1] : 'Unknown';

    let text = textTemplate.replace("{docsify-updated}", formatDate(updatedDate, formatUpdated))
                           .replace("{docsify-created}", formatDate(createdDate, formatCreated));

    if (whereToPlace === "top") {
      // Find the first heading
      let match = content.match(/^(#.*)$/m);
      if (match) {
        // Insert the text after the first heading
        let index = match.index + match[0].length;
        return content.slice(0, index) + "\n\n" + text + "\n\n" + content.slice(index);
      }
      // If no heading is found, place at the top of the document
      return text + "\n\n" + content;
    } else {
      // Default to placing at the bottom
      return content + "\n\n" + text;
    }
  })
}

// Docsify plugin options
window.$docsify = (window.$docsify || {})
window.$docsify.formatUpdated = window.$docsify["timeUpdater"] ? window.$docsify["timeUpdater"].formatUpdated : defaultDocsifyUpdatedOptions.formatUpdated
window.$docsify.formatCreated = window.$docsify["timeUpdater"] ? window.$docsify["timeUpdater"].formatCreated : defaultDocsifyUpdatedOptions.formatCreated
window.$docsify["timeUpdater"] = Object.assign(defaultDocsifyUpdatedOptions, window.$docsify["timeUpdater"])
window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin)
