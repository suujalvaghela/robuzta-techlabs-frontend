const counterValues = Array.from(document.querySelectorAll('.counter-value'));
const faqItems = Array.from(document.querySelectorAll('.faq-item'));
const quoteForm = document.getElementById('quote-form');
const formMessage = document.getElementById('form-message');
const successModal = document.getElementById('success-modal');
const closeModalButton = document.getElementById('close-modal');

if (counterValues.length > 0) {
    counterValues.forEach(function (counter) {
        const targetValue = Number(counter.getAttribute('data-target'));
        let currentValue = 0;

        const updateCounter = function () {
            if (currentValue >= targetValue) {
                counter.textContent = targetValue.toLocaleString() + '+';
                return;
            }

            currentValue += Math.ceil(targetValue / 40);
            counter.textContent = currentValue.toLocaleString() + '+';
            window.setTimeout(updateCounter, 35);
        };

        updateCounter();
    });
}

if (faqItems.length > 0) {
    faqItems.forEach(function (faqItem) {
        const questionButton = faqItem.querySelector('.faq-question');

        questionButton.addEventListener('click', function () {
            const isActive = faqItem.classList.contains('active');

            faqItems.forEach(function (item) {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            if (!isActive) {
                faqItem.classList.add('active');
                questionButton.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

if (quoteForm && formMessage) {
    quoteForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(quoteForm);
        const fullName = formData.get('fullName')?.toString().trim() || '';
        const phone = formData.get('phone')?.toString().trim() || '';
        const device = formData.get('device')?.toString().trim() || '';
        const model = formData.get('model')?.toString().trim() || '';
        const issue = formData.get('issue')?.toString().trim() || '';

        if (!fullName || !phone || !device || !model || !issue) {
            formMessage.textContent = 'Please fill in all required fields.';
            return;
        }

        formMessage.textContent = 'Thanks! Your request is being prepared.';
        quoteForm.reset();

        if (successModal) {
            successModal.classList.add('active');
            successModal.setAttribute('aria-hidden', 'false');
        }
    });
}

if (closeModalButton && successModal) {
    closeModalButton.addEventListener('click', function () {
        successModal.classList.remove('active');
        successModal.setAttribute('aria-hidden', 'true');
    });
}

if (successModal) {
    successModal.addEventListener('click', function (event) {
        if (event.target === successModal) {
            successModal.classList.remove('active');
            successModal.setAttribute('aria-hidden', 'true');
        }
    });
}
