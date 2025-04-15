function checkPasscode() {
      const passcode = document.getElementById("passcode").value.trim();
      const correctPasscode = "AFF123"; // you can change this code

      if (passcode === correctPasscode) {
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("error-message").innerText = "Incorrect passcode. Please try again.";
      }
    }

    function scrollToPasscode() {
      document.getElementById("passcode").scrollIntoView({ behavior: "smooth" });
    }
