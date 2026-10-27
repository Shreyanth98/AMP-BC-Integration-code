/*
 * AMP Brand Concierge: styling configuration (loaded before main.js, read by bootstrap as window.styleConfiguration).
 * Variant: Lifetime Boost - Existing Customer. Copy follows Kyle's "Brand Concierge interface design spec" (BC Interface tab of the AMP workbook).
 * Items marked CONFIRM are still to be confirmed by Kyle.
 */
window.styleConfiguration = {
  "metadata": {
    "brandName": "AMP Lifetime Boost - Existing Customer",
    "version": "1.0.0",
    "language": "en-AU",
    "namespace": "brand-concierge"
  },
  "behavior": {
    "multimodalCarousel": {
      "cardClickAction": "openLink",
      "cardStyle": "productCard",
      "cardsPerView": 3
    },
    "input": {
      "enableVoiceInput": false,
      "continuousVoiceMode": false,
      "disableMultiline": true,
      "showAiChatIcon": { "icon": "test" }
    },
    "chat": {
      "messageAlignment": "normal",
      "messageWidth": "100%"
    },
    "privacyNotice": { "title": "", "text": "", "links": [] },   // Composer still has template text ("YourBrand") here: leave empty until Kyle approves AMP wording
    // AMP Privacy Policy: https://www.amp.com.au/privacy   Terms of Use: https://www.amp.com.au/terms-and-conditions
    "productCard": {
      "actionButtonSize": "S",
      "attributeDisplayMode": "label-value"
    }
  },
  "disclaimer": {
    "text": "Use of this beta AI chatbot is subject to AMP's Privacy Policy. Don't share sensitive data. AI responses may be inaccurate, and any offers provided are non-binding. {Generative AI Terms}",
    "links": [
      { "text": "Generative AI Terms", "url": "https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html" }
    ]
  },
  "text": {
    "welcome.heading": "Short on time? Explore how Lifetime Boost can boost your super",
    "welcome.subheading": "Choose a prompt or ask your own questions to understand more about Lifetime Boost",
    "input.placeholder": "Ask a question",
    "input.messageInput.aria": "Message input",
    "input.send.aria": "Send message",
    "input.aiChatIcon.tooltip": "Ask AI",
    "input.mic.aria": "Voice input",
    "card.aria.select": "Select example message",
    "carousel.prev.aria": "Previous cards",
    "carousel.next.aria": "Next cards",
    "scroll.bottom.aria": "Scroll to bottom",
    "error.network": "I'm sorry, I'm having trouble connecting right now. Please try again shortly.",
    "loading.message": "",
    "feedback.dialog.title.positive": "Your feedback is appreciated",
    "feedback.dialog.title.negative": "Your feedback is appreciated",
    "feedback.dialog.question.positive": "What went well? Select all that apply.",
    "feedback.dialog.question.negative": "What went wrong? Select all that apply.",
    "feedback.dialog.notes": "Notes",
    "feedback.dialog.submit": "Submit",
    "feedback.dialog.cancel": "Cancel",
    "feedback.dialog.notes.placeholder": "Additional notes (optional)",
    "feedback.toast.success": "Thank you for the feedback.",
    "feedback.thumbsUp.aria": "Thumbs up",
    "feedback.thumbsDown.aria": "Thumbs down"
  },
  "arrays": {
    "welcome.examples": [
      {
        "text": "How does Lifetime Boost work?",
        "systemPrompt": "Explain how AMP's Lifetime Boost works and its benefits.",
        "image": "https://www.amp.com.au/adobe/dynamicmedia/deliver/dm-aid--d8cd43e8-1948-43c1-bdfd-4dde1a073dca/lifetime-boost-768x576.png?preferwebp=true&quality=60&width=720",
        "backgroundColor": "#0018f0"
      },
      {
        "text": "What are the benefits of Lifetime Boost?",
        "systemPrompt": "List the benefits of AMP's Lifetime Boost for retirement planning.",
        "image": "https://www.amp.com.au/content/dam/amp-2024/images/people/super/the-sooner-you-start-the-bigger-you-boost-736x736.png",
        "backgroundColor": "#263bf2"
      },
      {
        "text": "When should I start Lifetime Boost?",
        "systemPrompt": "Provide guidance on the best time to start using AMP's Lifetime Boost.",
        "image": "https://www.amp.com.au/content/dam/amp-2024/images/superannuation/people/lifetime-pension-hero-768x540.png",
        "backgroundColor": "#4d5df5"
      },
      {
        "text": "How can I increase my Age Pension eligibility?",
        "systemPrompt": "Explain how AMP's Lifetime Boost can help increase Age Pension eligibility.",
        "image": "https://www.amp.com.au/content/dam/amp-2024/images/superannuation/graphics/lifetime-structure-infographic.png",
        "backgroundColor": "#7380f7"
      }
    ],
    "feedback.positive.options": [
      "Helpful and relevant answers",
      "Clear and easy to understand",
      "Friendly and conversational tone",
      "Other"
    ],
    "feedback.negative.options": [
      "Not helpful or relevant",
      "Confusing or unclear",
      "Too formal or robotic",
      "Other"
    ]
  },
  "assets": { "icons": { "company": "" } },
  "visualProfile": {
    "sendIconIconColor": "#FFFFFF",
    "sendIconBackgroundColor": "#001e41"
  },
  "theme": {
    "--font-family": "'Open Sans', Arial, serif, sans-serif",
    "--font-size-body": "18px",
    "--font-weight-normal": "400",
    "--font-weight-semibold": "600",
    "--welcome-cards-order": "2",
    "--welcome-input-order": "3",
    "--welcome-heading-size-desktop": "44px",
    "--welcome-heading-size-mobile": "28px",
    "--welcome-heading-weight": "600",
    "--welcome-heading-text-align": "center",
    "--welcome-subheading-size-desktop": "18px",
    "--welcome-subheading-size-mobile": "16px",
    "--welcome-subheading-text-align": "center",
    "--welcome-padding": "24px",
    "--color-primary": "#001e41",
    "--color-text": "#4c617a",
    "--main-container-background": "linear-gradient(135deg, #e9f0fb 0%, #fbeef5 100%)",
    "--prompt-suggestion-background": "#ffffff",
    "--prompt-suggestion-background-hover": "#f4f7fb",
    "--prompt-suggestion-text-color": "#001e41",
    "--prompt-suggestion-border-color": "#e3eaf3",
    "--input-border-radius": "32px",
    "--input-background": "#ffffff",
    "--input-outline-color": "#d5deea",
    "--input-focus-outline-color": "#001e41",
    "--input-font-size": "18px",
    "--input-text-color": "#4c617a",
    "--color-button-submit": "#001e41",
    "--color-button-submit-hover": "#00122b",
    "--message-user-background": "#e3eaf3",
    "--message-user-text": "#001e41",
    "--message-concierge-background": "#ffffff",
    "--message-concierge-text": "#4c617a",
    "--message-max-width": "100%",
    "--chat-interface-max-width": "1040px",
    "--disclaimer-color": "#4c617a",
    "--disclaimer-link-color": "#001e41",
    "--privacy-notice-text-color": "#4c617a",
    "--privacy-notice-title-color": "#001e41",
    "--privacy-notice-link-color": "#001e41",
    "--prompt-suggestion-button-background": "#ffffff",
    "--prompt-suggestion-button-background-hover": "#6ce1ff",
    "--prompt-suggestion-button-text-color": "#001e41",
    "--prompt-suggestion-button-border-color": "#001e41",
    "--prompt-suggestion-border-hover": "#001e41",
    "--prompt-suggestion-button-font-size": "16px",
    "--disclaimer-font-size": "12px",
    "--button-primary-background": "#001e41",
    "--button-primary-text": "#ffffff",
    "--loading-dot-background": "#001e41"
  }
};
