<script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'hi',  // Default language is Hindi
      includedLanguages: 'en,hi,te,ta,kn,ml,gu,bn,mr,pa,ur',  // List of supported Indian languages
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }

  // Function to display the Google Translate dropdown when clicked
  function showTranslateDropdown() {
    var translateElement = document.getElementById('google_translate_element');
    var logoLink = document.querySelector('.goog-logo-link');
    
    // Toggle the visibility of the dropdown and logo
    if (translateElement.style.display === 'block') {
      translateElement.style.display = 'none';  // Hide the dropdown if it's already visible
      logoLink.style.display = 'none';  // Hide the logo when the dropdown is hidden
    } else {
      translateElement.style.display = 'block';  // Show the dropdown when clicked
      logoLink.style.display = 'inline-block';  // Show the logo to the right when dropdown is visible
    }
  }
</script>