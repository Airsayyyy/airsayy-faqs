$(document).ready(function() {
    $('.faq-question').click(function() {
        var $this = $(this);
        var $icon = $this.find('.icon');
        var $faqItem = $this.closest('.faq-item');
        var $answer = $this.next('.faq-answer');

        // Check if the clicked item is already open
        if ($faqItem.hasClass('open')) {
            // If already open, close it
            $answer.slideUp(200); // Slide up the answer
            $faqItem.removeClass('open'); // Remove the 'open' class
            $icon.attr('src', './assets/images/icon-plus.svg'); // Change icon to plus
        } else {
            // If not open, close all other items
            $('.faq-item.open').each(function() {
                var $openItem = $(this);
                var $openAnswer = $openItem.find('.faq-answer');
                var $openIcon = $openItem.find('.icon');
                
                // Slide up the open answer
                $openAnswer.slideUp(200);
                // Remove the 'open' class
                $openItem.removeClass('open');
                // Change the icon to plus
                $openIcon.attr('src', './assets/images/icon-plus.svg');
            });
            
            // Now open the clicked item
            $answer.slideDown(200); // Slide down the answer
            $faqItem.addClass('open'); // Add the 'open' class
            $icon.attr('src', './assets/images/icon-minus.svg'); // Change icon to minus
        }
    });
});
