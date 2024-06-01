let defaultDocsifyTimeCreatedOptions = {
  text: "> Created: {docsify-created}",
  formatMarkdown: "{MMM} {D}, {YYYY}",
  whereToPlace: "bottom",
  dateFormat: "DD/MM/YYYY" // Tambahkan opsi dateFormat
}

function formatDate(date, format) {
  let d = new Date(date);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return format.replace("{YYYY}", d.getFullYear())
               .replace("{MM}", String(d.getMonth() + 1).padStart(2, '0'))
               .replace("{MMM}", monthNames[d.getMonth()])
               .replace("{DD}", String(d.getDate()).padStart(2, '0'))
               .replace("{D}", String(d.getDate()));
}

function plugin(hook, vm) {
  let textTemplate = vm.config.timeCreated.text;
  let formatMarkdown = vm.config.timeCreated.formatMarkdown;
  let rootPath = vm.config.root || '/'; // Adjust this based on your project's root path

  hook.beforeEach(function (content) {
    // Check if the file is within the specified directory
    if (vm.route.path.startsWith(rootPath + 'blog/')) { // Change 'docs/' to your desired directory
      // Extract creation date from the content
      let createdDateMatch = content.match(/\[date-created\]:\s*(\d{4}\/\d{2}\/\d{2})/);
      let createdDate = createdDateMatch ? createdDateMatch[1] : 'Unknown';

      let text = textTemplate.replace("{docsify-created}", formatDate(createdDate, formatMarkdown));

      // Find the first heading
      let match = content.match(/^(#.*)$/m);
      if (match) {
        // Insert the text after the first heading
        let index = match.index + match[0].length;
        return content.slice(0, index) + "\n\n" + text + "\n\n" + content.slice(index);
      }

      // If no heading is found, place at the top of the document
      return text + "\n\n" + content;
    }

    // Return content without modification if the file is not within the specified directory
    return content;
  });
}

// Docsify plugin options
window.$docsify = (window.$docsify || {});
window.$docsify.formatMarkdown = window.$docsify["timeCreated"] ? window.$docsify["timeCreated"].formatMarkdown : defaultDocsifyTimeCreatedOptions.formatMarkdown;
window.$docsify["timeCreated"] = Object.assign(defaultDocsifyTimeCreatedOptions, window.$docsify["timeCreated"]);
window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin);
