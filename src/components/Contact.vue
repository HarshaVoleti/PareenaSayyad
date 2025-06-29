<script setup>
import { ref } from 'vue'
import config from '@/config.js'

// Contact section component
const formData = ref({
  name: '',
  email: '',
  project: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  // Validate form
  if (!formData.value.name || !formData.value.email || !formData.value.project) {
    submitMessage.value = 'Please fill in all fields.'
    submitSuccess.value = false
    return
  }

  // Check field lengths
  if (formData.value.name.length > config.form.maxNameLength) {
    submitMessage.value = `Name must be less than ${config.form.maxNameLength} characters.`
    submitSuccess.value = false
    return
  }

  if (formData.value.email.length > config.form.maxEmailLength) {
    submitMessage.value = `Email must be less than ${config.form.maxEmailLength} characters.`
    submitSuccess.value = false
    return
  }

  if (formData.value.project.length > config.form.maxProjectLength) {
    submitMessage.value = `Project description must be less than ${config.form.maxProjectLength} characters.`
    submitSuccess.value = false
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Prepare form data for Google Sheets
    const payload = {
      name: formData.value.name.trim(),
      email: formData.value.email.trim(),
      project: formData.value.project.trim(),
      timestamp: new Date().toISOString(),
      source: 'Portfolio Website'
    }

    // Send to Google Sheets via Google Apps Script
    const response = await fetch(config.googleScriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    // Since we're using no-cors, we can't read the response
    // But if we reach here without error, it likely succeeded
    submitMessage.value = 'Thank you for your message! I\'ll get back to you soon. 🎉'
    submitSuccess.value = true
    
    // Reset form after successful submission
    formData.value = {
      name: '',
      email: '',
      project: ''
    }

  } catch (error) {
    console.error('Error submitting form:', error)
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again or contact me directly.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
    
    // Clear message after configured duration
    setTimeout(() => {
      submitMessage.value = ''
    }, config.form.successMessageDuration)
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="content-layout">
      <div class="left-side">
        <div class="section-header">
          <h2 class="section-title">
            <span class="highlight-full">Contact here</span>
          </h2>
        </div>

        <!-- Curved Arrow pointing to contact form -->
        <div class="curved-arrow">
          <img src="@/assets/svgs/arrow.svg" alt="Arrow" class="arrow-image" />
        </div>

        <div class="section-description">
          <p class="section-text">
            Have a project idea?<br>
            just say me <strong>Hi</strong>.
          </p>
        </div>
      </div>

      <div class="right-side">
        <div class="contact-form-container">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label class="form-label">
                <span class="label-highlight pink">Name</span>
              </label>
              <input 
                type="text" 
                class="form-input" 
                placeholder="Enter name"
                v-model="formData.name"
                :maxlength="config.form.maxNameLength"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                <span class="label-highlight yellow">Email</span>
              </label>
              <input 
                type="email" 
                class="form-input" 
                placeholder="Enter email"
                v-model="formData.email"
                :maxlength="config.form.maxEmailLength"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                <span class="label-highlight blue">About Your Project</span>
              </label>
              <textarea 
                class="form-textarea" 
                placeholder="What would you like to build together?"
                v-model="formData.project"
                :maxlength="config.form.maxProjectLength"
                rows="4"
                required
              ></textarea>
            </div>

            <div class="form-submit">
              <button 
                type="submit" 
                class="submit-button"
                :disabled="isSubmitting"
                :class="{ 'submitting': isSubmitting }"
              >
                <span v-if="!isSubmitting">Submit</span>
                <span v-else>Sending...</span>
              </button>
              
              <!-- Success/Error Message -->
              <div 
                v-if="submitMessage" 
                class="submit-message"
                :class="{ 'success': submitSuccess, 'error': !submitSuccess }"
              >
                {{ submitMessage }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contact Section */
.contact-section {
  padding: 4rem 0 1rem 0;
  margin-top: 2rem;
}

.content-layout {
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;
  padding: 0 2rem;
}

.left-side {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.right-side {
  flex: 1;
  display: flex;
  justify-content: center;
}

.section-header {
  text-align: left;
  margin-top: 6rem;
  margin-left: 60px;
}

.section-title {
  font-family: 'Handlee', cursive;
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
  margin: 0;
}

.highlight-full {
  position: relative;
  display: inline-block;
  font-family: 'Handlee', cursive;
  font-size: 3rem;
  font-weight: bold;
}

.highlight-full::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 80%;
  background: rgba(255, 201, 240, 1);
  transform: translateY(-50%) rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}

.curved-arrow {
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
  margin-top: 2rem;
  position: relative;
}

.arrow-image {
  width: 80px;
  height: 60px;
  transform: rotate(240deg);
}

.section-description {
  margin-left: 60px;
  margin-top: 2rem;
  max-width: 300px;
}

.section-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
  color: #555;
  margin: 0;
}

.section-text strong {
  font-weight: 700;
  color: #000;
}

.contact-form-container {
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  margin: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-family: 'Handlee', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

.label-highlight {
  position: relative;
  display: inline-block;
  padding: 0.2rem 0.5rem;
}

.label-highlight.pink {
  background: rgba(255, 201, 240, 1);
}

.label-highlight.yellow {
  background: #f5d616;
}

.label-highlight.blue {
  background: #87ceeb;
}

.form-input,
.form-textarea {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #555;
  background: transparent;
  border: none;
  border-bottom: 2px solid #000;
  padding: 1rem 0;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #888;
  font-style: italic;
}

.form-input:focus,
.form-textarea:focus {
  border-bottom-color: #4a90e2;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.5;
}

.form-submit {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
  gap: 1rem;
}

.submit-button {
  background: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  min-width: 120px;
}

.submit-button:hover:not(:disabled) {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled,
.submit-button.submitting {
  background: #666;
  cursor: not-allowed;
  opacity: 0.7;
}

.submit-button.submitting {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
}

.submit-message {
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  animation: fadeIn 0.3s ease-in;
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.1);
  color: #15803d;
  border: 2px solid rgba(34, 197, 94, 0.3);
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 2px solid rgba(239, 68, 68, 0.3);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive Design */
@media (max-width: 968px) {
  .content-layout {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  
  .curved-arrow {
    display: none;
  }
  
  .section-header {
    margin-left: 0;
    text-align: center;
  }
  
  .section-description {
    margin-left: 0;
    text-align: center;
    max-width: 100%;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .contact-form-container {
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-form-container {
    padding: 1.5rem;
    margin: 20px;
  }
  
  .form-label {
    font-size: 1.2rem;
  }
  
  .form-input,
  .form-textarea {
    font-size: 1rem;
  }
  
  .submit-button {
    width: 100%;
    justify-self: stretch;
  }
  
  .form-submit {
    justify-content: stretch;
  }
}
</style>
