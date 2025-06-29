<script setup>
// Footer component
</script>

<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-left">
          <div class="footer-logo">
            <span class="star-icon">✦</span>
            <span class="footer-name">Pareena Sayyad</span>
          </div>
        </div>
        
        <div class="footer-right">
          <div class="social-links">
            <a href="https://linkedin.com/in/pareena-sayyad" target="_blank" class="social-link">
              <span class="social-button">LinkedIn</span>
            </a>
            <a href="https://behance.net/pareena-sayyad" target="_blank" class="social-link">
              <span class="social-button">Behance</span>
            </a>
            <a href="https://instagram.com/pareena.sayyad" target="_blank" class="social-link">
              <span class="social-button">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  margin-top: 0.5rem;
  padding: 0 2rem 0 2rem;
  /* Add a simple top border divider like paper section separator */
  border-top: 2px solid #000;
  position: relative;
}

/* Extend the top border line past the section edges */
.footer-section::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -2.5rem;
  right: -2rem;
  height: 3px;
  background: #000;
  z-index: 0;
}

.footer-container {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  padding: 1.5rem 2rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0;
}

.footer-left {
  display: flex;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.star-icon {
  font-size: 1.5rem;
  color: #000;
  font-weight: bold;
}

.footer-name {
  font-family: 'Handlee', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}

.footer-right {
  display: flex;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  text-decoration: none;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.social-link:hover {
  transform: translateY(-2px);
}

.social-button {
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 0;
  font-family: 'Handlee', cursive;
  font-weight: normal;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  transform: rotate(-1deg);
  pointer-events: all;
}

.social-button:hover {
  background: #333;
  transform: rotate(-0.5deg) scale(1.02);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
    text-align: center;
  }
  
  .social-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }
  
  .social-button {
    padding: 6px 12px;
    font-size: 20px;
  }
  
  .footer-name {
    font-size: 1.3rem;
  }
  
  .star-icon {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 0 1rem 0 1rem;
  }
  
  .footer-content {
    padding: 1rem;
  }
  
  .social-links {
    gap: 0.5rem;
  }
  
  .social-button {
    padding: 5px 10px;
    font-size: 18px;
  }
}
</style>
