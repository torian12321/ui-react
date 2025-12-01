/** Helper function to check if the content is valid HTML */
export const isValidHtmlContent = (
  htmlContent: string | TrustedHTML,
): htmlContent is TrustedHTML => {
  if (!htmlContent) {
    return false;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent.toString(), 'text/html');
  return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
};
