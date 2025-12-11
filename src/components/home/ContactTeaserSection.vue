<template>
  <section id="contact-teaser" class="contact-teaser-section py-20 lg:py-28 px-4 bg-white scroll-mt-25">
    <div class="container mx-auto max-w-3xl text-center">
      <!-- Header -->
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
        Свяжитесь с нами
      </h2>

      <!-- Contact Info -->
      <div class="contact-info mb-12">
        <p class="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          г. Алматы, 5-й микрорайон, 19Б, торговый дом М5
        </p>
        <p class="text-lg md:text-xl text-gray-600">
          Телефон: 
          <a href="tel:87756511161" class="contact-link">
            +7 775 651 11 61
          </a>
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <router-link to="/contacts" class="cta-button-primary">
          Все контакты
        </router-link>
        <a href="https://wa.me/77756511161" target="_blank" class="cta-button-secondary">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Написать в WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-teaser-section {
  position: relative;
}

/* Contact Info */
.contact-info {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-link {
  color: #6b2dd4;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  border-bottom: 1px solid transparent;
}

.contact-link:hover {
  color: #5221a6;
  border-bottom-color: #5221a6;
}

/* Primary CTA Button */
.cta-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: #6b2dd4;
  color: white;
  border: 2px solid #6b2dd4;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  min-width: 200px;
}

.cta-button-primary:hover {
  background: #5221a6;
  border-color: #5221a6;
  transform: translateY(-1px);
}

/* Secondary CTA Button */
.cta-button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  background: white;
  color: #6b2dd4;
  border: 2px solid #6b2dd4;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  min-width: 200px;
}

.cta-button-secondary:hover {
  background: #f9fafb;
  color: #5221a6;
  border-color: #5221a6;
  transform: translateY(-1px);
}

.cta-button-secondary svg {
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 640px) {
  .contact-teaser-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .contact-info {
    margin-bottom: 2rem;
  }

  .contact-info p {
    font-size: 1rem;
  }

  .cta-button-primary,
  .cta-button-secondary {
    width: 100%;
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}
</style>
