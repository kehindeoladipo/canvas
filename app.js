pJS(
  'particles-js',

  {
    particles: {
      number: {
        value: 47,
        density: {
          enable: true,
          value_area: 946.9771699587272
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000'
        },
        polygon: {
          nb_sides: 6
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.8257572113457442,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 12,
        random: false,
        anim: {
          enable: true,
          speed: 36.54347455356053,
          size_min: 69.83864025791567,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 48.10236182596568,
        color: '#ffffff',
        opacity: 1,
        width: 12.506614074751079
      },
      move: {
        enable: true,
        speed: 4,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'grab'
        },
        onclick: {
          enable: false,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
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
  }
);


let upDateTime = new Date('October 31, 2017 12:00:00').getTime();

// update count down every one second

let displaytime = setInterval(function(){
	// todays date and time
	let now = new Date().getTime();

	// distance or time between now and proposed date
	let remain_t =  upDateTime - now;

	// calculations for days, hours , minutes and seconds
	let days = Math.floor(remain_t / (1000 * 60 * 60 * 24));
	let hours = Math.floor((remain_t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((remain_t % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((remain_t % (1000 * 60)) / 1000); 

	// display result in page
	document.getElementById("cd").innerHTML = days + ' Days ' + hours + ':' + minutes + ':' + seconds;

	// if count down is finished
	// write some text
	if (remain_t < 0){
		clearInterval(displaytime);
		document.getElementById('demo').innerHTML = 'WE ARE Live';
	}
}, 1000);