// GoldenCrisp Academy - Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 3. Navbar scroll effect
  const navbar = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('bg-white/95', 'shadow-md', 'backdrop-blur-md');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-white/95', 'shadow-md', 'backdrop-blur-md');
      navbar.classList.add('bg-transparent');
    }
  });

  // 4. Interactive Profit & Cost Calculator
  const piecesSlider = document.getElementById('calc-pieces');
  const priceInput = document.getElementById('calc-price');
  const piecesValueDisplay = document.getElementById('calc-pieces-val');
  
  const dailyRevEl = document.getElementById('res-daily-rev');
  const monthlyRevEl = document.getElementById('res-monthly-rev');
  const costEstimateEl = document.getElementById('res-cost');
  const netProfitEl = document.getElementById('res-net-profit');

  function calculateProfit() {
    if (!piecesSlider || !priceInput) return;
    
    const piecesPerDay = parseInt(piecesSlider.value, 10);
    const pricePerPiece = parseFloat(priceInput.value) || 35;
    
    piecesValueDisplay.textContent = piecesPerDay.toLocaleString('th-TH');

    // Cost assumptions: Average cost per piece is ~ 45-50% (Chicken, batter, spices, oil, gas, packaging)
    const costRatio = 0.48; 
    const daysPerMonth = 26; // Open 26 days/month (rest 4 days)

    const dailyRevenue = piecesPerDay * pricePerPiece;
    const monthlyRevenue = dailyRevenue * daysPerMonth;
    const monthlyCost = monthlyRevenue * costRatio;
    const monthlyNetProfit = monthlyRevenue - monthlyCost;

    dailyRevEl.textContent = '฿' + Math.round(dailyRevenue).toLocaleString('th-TH');
    monthlyRevEl.textContent = '฿' + Math.round(monthlyRevenue).toLocaleString('th-TH');
    costEstimateEl.textContent = '฿' + Math.round(monthlyCost).toLocaleString('th-TH');
    netProfitEl.textContent = '฿' + Math.round(monthlyNetProfit).toLocaleString('th-TH');
  }

  if (piecesSlider && priceInput) {
    piecesSlider.addEventListener('input', calculateProfit);
    priceInput.addEventListener('input', calculateProfit);
    calculateProfit();
  }

  // 5. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (trigger && answer) {
      trigger.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');
        
        // Close all others
        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherAnswer) otherAnswer.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 6. Enrollment Modal Logic
  const modal = document.getElementById('enroll-modal');
  const modalPackageSelect = document.getElementById('package-select');
  const openModalButtons = document.querySelectorAll('.btn-open-modal');
  const closeModalBtn = document.getElementById('btn-close-modal');

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPackage = btn.getAttribute('data-package') || 'pro';
      if (modalPackageSelect) {
        modalPackageSelect.value = targetPackage;
      }
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // 7. Lead Form Submission & Toast Notification
  const enrollForm = document.getElementById('enroll-form');
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4500);
  }

  if (enrollForm) {
    enrollForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('student-name')?.value || 'คุณ';
      closeModal();
      showToast(`🎉 ยินดีด้วยครับคุณ ${name}! ทีมงานได้รับข้อมูลแล้ว จะติดต่อกลับทาง LINE ภายใน 15 นาทีครับ`);
      enrollForm.reset();
    });
  }

  // Quick bottom CTA lead form
  const quickForm = document.getElementById('quick-lead-form');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('🎉 ขอบคุณที่สนใจสูตรไก่ทอดเงินล้าน! เราส่งคู่มือทดลองเข้า LINE ของคุณแล้วครับ');
      quickForm.reset();
    });
  }
});
