import React from 'react';
import Particles from 'react-tsparticles';
import { Main } from 'tsparticles';
// import { loadLinksPreset } from 'tsparticles-preset-links';
export default function ParticleEffects() {
  const particlesInit = (main: Main): any => {
  }
  
  return (
    <Particles 
      id="tsparticles"
      init={particlesInit}
      className="z-0 fixed top-0 left-0"
      options={{
        fpsLimit: 60,
        background: {
          color: "#1C1E26"
        },
        backgroundMode: {
          enable: true
        },
        particles: {
          color: {
            value: ["#BBE1FA"]
          },
          links: {
            color: "#FFF",
            enable: true
          },
          move: {
            enable: true,
            speed: 0.3
          },
          size: {
            value: 5,
            random: {
              enable: true,
              minimumValue: 1
            },
            animation: {
              enable: true,
              speed: 2.5,
              minimumValue: 1
            }
          },
          opacity: {
            value: 0.8,
            random: {
              enable: true,
              minimumValue: 0.4
            }
          }
        }
      }}
    />
  )
}
