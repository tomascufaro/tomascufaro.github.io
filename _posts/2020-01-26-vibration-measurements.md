---
layout: post
title: "DIY Vibration Analysis: From Raspberry Pi to Industrial Insights"
subtitle: "Building a low-cost vibration analyzer to study mechanical systems"
date: 2020-01-26 23:45:13 -0400
background: '/img/vibrations.jpeg'
---

> **Editor's Note:** This post was enhanced and co-written by Artificial Intelligence to showcase the technical depth of the project.

Vibration is the heartbeat of machinery. Every rotation, every oscillation tells a story about the health and efficiency of a system. But capturing that story often requires expensive, proprietary equipment. What if we could unlock these insights using open-source hardware and Python?

This project, the **Mechanic Vibration Analyser**, explores exactly that: a low-cost, high-precision system built on a Raspberry Pi and an MPU6050 accelerometer to measure, visualize, and analyze mechanical vibrations in real-time.

## The Hardware: Small but Mighty

At the core of this experiment is the **MPU6050**, a 6-axis motion tracking device that combines a 3-axis gyroscope and a 3-axis accelerometer. Connected to a Raspberry Pi 3B+, this sensor becomes a powerful edge device capable of detecting minute changes in acceleration.

The goal? To study the vibratory behavior of a household appliance—specifically, a **White-Westinghouse CL/311 dryer** (45.5 kg)—and evaluate the effectiveness of vibration damping solutions.

## The Software: Python & Real-Time Visualization

The software stack was designed for flexibility and real-time feedback. You can find the full source code on [GitHub](https://github.com/tomascufaro/mechanic_vibration_analyser).

Key features include:
*   **Real-time Plotting:** Using `matplotlib` to visualize x, y, and z-axis acceleration as it happens.
*   **Calibration:** Automated scripts to zero-out sensor noise.
*   **Remote Monitoring:** A client-server architecture using Python `sockets` allows the Pi to sit on the vibrating machine while data is streamed wirelessly to a master computer.

## Case Study: Taming the Dryer

We subjected the washing machine/dryer to a forced vibration study. The machine operates with a periodic rotary motion, generating a sinusoidal force profile. By introducing vibration isolation mounts, we aimed to decouple the machine from its base.

The results were visualized using the system:

![Acceleration attenuation graph](/img/posts/vibration/Estudio_forzado_medicion_sobre_base_accel.png){: .img-fluid }
<span class="caption text-muted">Figure 1: Vibration acceleration attenuation comparing rigid vs. isolated mounting.</span>

The data revealed a clear decoupling effect. While the machine's internal behavior remained largely unchanged, the energy transmitted to the floor was significantly reduced. This "insertion loss" proves that even simple, accessible damping systems can effectively mitigate environmental noise and structural stress.

![Attenuation in dB](/img/posts/vibration/Estudio_forzado_medicion_sobre_base_dbs.png){: .img-fluid }
<span class="caption text-muted">Figure 2: Measured attenuation in decibels.</span>

## Conclusion

This project demonstrates that sophisticated vibration analysis doesn't need to be inaccessible. With a Raspberry Pi and some Python code, we can replicate industrial monitoring systems, allowing for predictive maintenance and structural health monitoring right from a home garage.

For a deep dive into the physics and math behind this study, check out the full academic paper:

[Read the Full Paper (PDF)](/files/acusticproject.pdf){: .btn .btn-primary }
