/*
 * AMP Brand Concierge: styling configuration for the Existing Customer concierge.
 * This file is the Composer export, unchanged: Deployments, Style Configuration, Download style configuration.
 * Do not edit it by hand. When the look or wording changes in Composer, download it again and replace this file.
 */
window.styleConfiguration = {
  "id": "4e032127-122f-405c-80ee-ebc953fa704e",
  "name": "AMP_26-10-08_4e032127-122f-405c-80ee-ebc953fa704e",
  "metadata": {
    "brandName": "AMP",
    "version": "1.0.0",
    "language": "en",
    "namespace": "brand-concierge"
  },
  "behavior": {
    "multimodalCarousel": {
      "cardClickAction": "openLink"
    },
    "input": {
      "enableVoiceInput": false,
      "continuousVoiceMode": false,
      "disableMultiline": true,
      "showAiChatIcon": {
        "icon": ""
      }
    },
    "chat": {
      "messageAlignment": "normal",
      "messageWidth": "100%"
    },
    "privacyNotice": {
      "title": "Privacy Notice",
      "text": "Your use of this automated chatbot constitutes your consent that the personal information you provide in the chat session can be collected, used, disclosed, and retained by YourBrand and service providers acting on YourBrand's behalf in accordance with the YourBrand {Privacy Policy}. Please do not provide sensitive personal information (such as financial or health information) in the chatbot.",
      "links": [
        {
          "text": "Privacy Policy",
          "url": "https://www.amp.com.au/privacy"
        }
      ]
    },
    "meetingForm": {
      "fieldsPerRow": 2,
      "fieldLayoutRules": {
        "textInputs": {
          "allowTwoColumns": true,
          "fieldTypes": [
            "string",
            "email",
            "tel",
            "number"
          ],
          "identifyBy": null
        },
        "dropdowns": {
          "allowTwoColumns": false,
          "fieldTypes": [
            "select"
          ],
          "identifyBy": "hasOptions"
        },
        "checkboxes": {
          "allowTwoColumns": false,
          "fieldTypes": [
            "boolean",
            "checkbox"
          ],
          "identifyBy": null
        }
      },
      "title": {
        "text": "Schedule a Meeting",
        "alignment": "left"
      },
      "subtitle": {
        "text": "Let us help you plan your financial future.",
        "alignment": "left"
      },
      "buttons": {
        "submit": {
          "text": "Book Now",
          "alignment": "left"
        },
        "cancel": {
          "text": "Cancel",
          "alignment": "left"
        }
      }
    },
    "calendarWidget": {
      "title": {
        "text": "Choose a Time",
        "alignment": "left"
      },
      "subtitle": {
        "text": "Select a convenient time for your consultation.",
        "alignment": "left"
      },
      "postTitle": {
        "text": "Once confirmed, you will receive a calendar invite with all the details. The specialist will already have this conversation context, so no need to repeat anything. Looking forward to connecting you with the right expert!",
        "alignment": "left"
      },
      "buttons": {
        "confirm": {
          "text": "Confirm",
          "alignment": "left"
        },
        "cancel": {
          "text": "Cancel",
          "alignment": "left"
        }
      }
    },
    "productCard": {
      "actionButtonSize": "S"
    },
    "b2bLiveChat": {
      "enabled": true
    }
  },
  "disclaimer": {
    "text": "Use of this beta AI chatbot is subject to AMP's Privacy Policy. Don't share sensitive information. AI responses may be inaccurate, and do not represent personal advice. Learn more at Generative AI Terms {Terms}",
    "links": [
      {
        "text": "Terms of Use",
        "url": "https://www.amp.com.au/terms-and-conditions"
      }
    ]
  },
  "text": {
    "welcome.heading": "Short on time?",
    "welcome.subheading": "Choose a prompt or ask a question to understand more about Lifetime Boost",
    "input.placeholder": "Any any question",
    "input.messageInput.aria": "Type your message here",
    "input.send.aria": "Send message",
    "input.aiChatIcon.tooltip": "Chat with AMP",
    "input.mic.aria": "Use voice input",
    "card.aria.select": "Select this option",
    "carousel.prev.aria": "Previous",
    "carousel.next.aria": "Next",
    "scroll.bottom.aria": "Scroll to bottom",
    "error.network": "Something went wrong. Please try again.",
    "loading.message": "Loading...",
    "feedback.dialog.title.positive": "Thank you for your feedback!",
    "feedback.dialog.title.negative": "We\u2019re sorry to hear that.",
    "feedback.dialog.question.positive": "What did you like about your experience?",
    "feedback.dialog.question.negative": "What could we improve?",
    "feedback.dialog.notes": "Additional comments",
    "feedback.dialog.submit": "Submit Feedback",
    "feedback.dialog.cancel": "Cancel",
    "feedback.dialog.notes.placeholder": "Enter your comments here...",
    "feedback.toast.success": "Thank you for your feedback!",
    "feedback.thumbsUp.aria": "Give positive feedback",
    "feedback.thumbsDown.aria": "Give negative feedback",
    "feedback.title": "We value your feedback",
    "feedback.positive.title": "What did you like?",
    "feedback.negative.title": "What can we improve?",
    "feedback.submitButton": "Submit",
    "feedback.positive.options": "",
    "feedback.negative.options": ""
  },
  "arrays": {
    "welcome.examples": [
      {
        "text": "How does Lifetime Boost work?",
        "systemPrompt": "Explain how AMP's Lifetime Boost works and its benefits.",
        "imageUrl": "https://www.amp.com.au/adobe/dynamicmedia/deliver/dm-aid--d8cd43e8-1948-43c1-bdfd-4dde1a073dca/lifetime-boost-768x576.png?quality=60&preferwebp=true&width=720",
        "imageName": "",
        "image": "https://www.amp.com.au/adobe/dynamicmedia/deliver/dm-aid--d8cd43e8-1948-43c1-bdfd-4dde1a073dca/lifetime-boost-768x576.png?quality=60&preferwebp=true&width=720",
        "backgroundColor": "#0018f0"
      },
      {
        "text": "What are the benefits of Lifetime Boost?",
        "systemPrompt": "List the benefits of AMP's Lifetime Boost for retirement planning.",
        "imageUrl": "https://www.amp.com.au/content/dam/amp-2024/images/people/super/the-sooner-you-start-the-bigger-you-boost-736x736.png",
        "imageName": "",
        "image": "https://www.amp.com.au/content/dam/amp-2024/images/people/super/the-sooner-you-start-the-bigger-you-boost-736x736.png",
        "backgroundColor": "#263bf2"
      },
      {
        "text": "When should I start Lifetime Boost?",
        "systemPrompt": "Provide guidance on the best time to start using AMP's Lifetime Boost.",
        "imageUrl": "https://www.amp.com.au/content/dam/amp-2024/images/superannuation/people/lifetime-pension-hero-768x540.png",
        "imageName": "",
        "image": "https://www.amp.com.au/content/dam/amp-2024/images/superannuation/people/lifetime-pension-hero-768x540.png",
        "backgroundColor": "#4d5df5"
      },
      {
        "text": "How can I increase my Age Pension eligibility?",
        "systemPrompt": "Explain how AMP's Lifetime Boost can help increase Age Pension eligibility.",
        "imageUrl": "https://www.amp.com.au/content/dam/amp-2024/images/superannuation/graphics/lifetime-structure-infographic.png",
        "imageName": "",
        "image": "https://www.amp.com.au/content/dam/amp-2024/images/superannuation/graphics/lifetime-structure-infographic.png",
        "backgroundColor": "#7380f7"
      }
    ],
    "feedback.positive.options": [
      "Helpful information",
      "Easy to use",
      "Clear and concise",
      "Friendly tone",
      "Other"
    ],
    "feedback.negative.options": [
      "Information was unclear",
      "Difficult to use",
      "Too slow",
      "Not helpful",
      "Other"
    ]
  },
  "assets": {
    "icons": {
      "company": "https://www.amp.com.au/content/dam/amp-2024/images/logos/amp-logo.svg"
    }
  },
  "theme": {
    "--welcome-input-order": "3",
    "--welcome-cards-order": "2",
    "--welcome-heading-size-desktop": "36px",
    "--welcome-heading-size-mobile": "36px",
    "--welcome-heading-weight": "600",
    "--welcome-heading-text-align": "center",
    "--welcome-subheading-size-desktop": "18px",
    "--welcome-subheading-size-mobile": "18px",
    "--welcome-subheading-text-align": "center",
    "--welcome-padding": "24px",
    "--prompt-suggestion-background": "#522752",
    "--prompt-suggestion-background-hover": "#522752",
    "--prompt-suggestion-text-color": "#522752",
    "--prompt-suggestion-border-color": "#522752",
    "--font-family": "'Hurme Geometric Sans', sans-serif",
    "--color-primary": "#0018f0",
    "--color-text": "#522752",
    "--line-height-body": "1.5",
    "--main-container-background": "#ffffff",
    "--input-height": "48px",
    "--input-height-mobile": "40px",
    "--input-border-radius": "8px",
    "--input-border-radius-mobile": "6px",
    "--input-background": "#ffffff",
    "--input-outline-color": "#d9d9d9",
    "--input-outline-width": "2px",
    "--input-box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    "--input-focus-outline-width": "3px",
    "--input-focus-outline-color": "#0018f0",
    "--input-font-size": "1rem",
    "--input-font-weight": "400",
    "--input-text-color": "#212529",
    "--input-button-height": "36px",
    "--input-button-width": "36px",
    "--submit-button-fill-color": "#ffffff",
    "--submit-button-fill-color-disabled": "#CCCCCC",
    "--color-button-submit": "#0018f0",
    "--color-button-submit-hover": "#0018f0",
    "--input-button-border-radius": "8px",
    "--button-disabled-background": "#F0F0F0",
    "--disclaimer-color": "#bfc7cf",
    "--disclaimer-font-size": "14px",
    "--disclaimer-font-weight": "400",
    "--message-user-background": "#0018f0",
    "--message-user-text": "#ffffff",
    "--message-border-radius": "8px",
    "--message-padding": "16px",
    "--message-concierge-background": "#f3f3f3",
    "--message-concierge-text": "#000000",
    "--message-max-width": "100%",
    "--chat-interface-max-width": "768px",
    "--message-blocker-height": "48px",
    "--loading-message-background": "#d9d9d9",
    "--loading-dot-background": "#626262",
    "--color-text-muted": "#626262",
    "--citations-text-font-weight": "400",
    "--citations-desktop-button-font-size": "0.875rem",
    "--feedback-icon-btn-background": "#f6f3ea",
    "--feedback-icon-btn-hover-background": "#e5e5e5",
    "--feedback-icon-btn-size-desktop": "40px",
    "--feedback-container-gap": "16px",
    "--multimodal-card-box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
    "--border-radius-card": "20px",
    "--button-height-s": "36px",
    "--button-primary-background": "#00D5AC",
    "--button-primary-text": "#001E41",
    "--button-primary-hover": "#4CE2C5",
    "--button-secondary-border": "#738396",
    "--button-secondary-text": "#001E41",
    "--button-secondary-hover": "#FFFFFF",
    "--color-button-secondary-hover-text": "#0018F0",
    "--privacy-notice-background": "#f6f3ea",
    "--privacy-notice-padding": "16px",
    "--privacy-notice-title-color": "#626262",
    "--privacy-notice-text-color": "#626262",
    "--privacy-notice-text-font-size": "0.875rem",
    "--privacy-notice-title-font-size": "1rem",
    "--message-concierge-link-decoration": "underline",
    "--color-secondary": "#00d5ac",
    "--prompt-suggestion-button-background": "#d9d9d9",
    "--prompt-pill-background": "#0018f0",
    "--button-primary-mobile-background": "#522752",
    "--button-primary-mobile-hover": "#522752",
    "--main-container-mobile-background": "#ffffff",
    "--message-concierge-border-width": "1px",
    "--message-concierge-link-color": "#0018f0",
    "--prompt-suggestion-button-border-radius": "16px",
    "--prompt-suggestion-button-padding": "8px 16px",
    "--prompt-suggestions-container-gap": "12px",
    "--card-background": "#0018f0",
    "--card-text-font-size": "16px",
    "--card-text-padding": "16px",
    "--chat-container-background": "#ffffff",
    "--message-blocker-background": "#ffffff",
    "--card-text-color": "#4C617A",
    "--prompt-pill-border-color": "#0018f0",
    "--prompt-pill-text-color": "#ffffff",
    "--prompt-suggestion-button-text-color": "#626262",
    "--prompt-suggestion-button-background-hover": "#d9d9d9",
    "--welcome-heading-text-color": "#001E41",
    "--welcome-subheading-text-color": "#001E41",
    "--welcome-header-order": "1",
    "--prompt-suggestions-flex-direction": "row",
    "--prompt-suggestions-flex-wrap": "wrap",
    "--card-border-radius": "0px",
    "--card-text-border-radius": "0px",
    "--chat-container-bottom-background": "#ffffff",
    "--main-container-bottom-background": "#ffffff",
    "--card-text-background": "#FFFFFF",
    "--product-card-title-font-weight": "600",
    "--product-card-title-color": "#001E41",
    "--product-card-button-font-weight": "600"
  }
};
