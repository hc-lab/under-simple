// Configuración de partículas para el fondo
document.addEventListener('DOMContentLoaded', function() {
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load("tsparticles", {
      fpsLimit: 60,
      particles: {
        number: {
          value: 30, // Reducido de 50 a 30
          density: {
            enable: true,
            value_area: 1000 // Aumentado para reducir la densidad
          }
        },
        color: {
          value: "#333333"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.1, // Reducido de 0.2 a 0.1
          random: true,
          anim: {
            enable: true,
            speed: 0.3,
            opacity_min: 0.03,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#555555",
          opacity: 0.08, // Reducido de 0.15 a 0.08
          width: 0.8 // Reducido de 1 a 0.8
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "none", // Cambiado de "canvas" a "none" para desactivar completamente la interactividad
        events: {
          onhover: {
            enable: false,
            mode: "grab"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
});
