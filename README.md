# Adaptive Street Light Control Energy-Optimization
The Adaptive Street Light Intensity Control and Energy Consumption Optimization System is an intelligent, automated municipal lighting solution designed to reduce grid energy consumption without compromising public safety. Traditional street lighting systems operate on fixed high-wattage schedules, consuming full power regardless of actual traffic, pedestrian presence, or environmental lighting conditions. This system dynamically regulates LED intensity based on real-time environmental inputs and time-of-day logic.
# Purpose & Key Objectives
Energy Conservation: Minimizes overall power usage during low-traffic overnight hours by dynamically dimming fixtures rather than leaving them at 100% brightness.

Cost Reduction: Lowers operational and electricity expenses for municipal authorities and smart city infrastructure projects.

Light Pollution & Hardware Longevity: Reduces ambient light pollution during late-night hours and extends the operational lifespan of LED luminaires by avoiding prolonged peak power draw.
# Key Hardware & Software Components
Central Processing Unit: A micro-controller/processor (such as Arduino, ESP32, or a Python-simulated controller) that processes multi-sensor inputs and executes switching logic.

Light Dependent Resistor (LDR): Detects natural ambient light levels to determine transition thresholds between daylight (system inactive/OFF) and dusk/night (standby/ON).

Passive Infrared (PIR) Sensor: Detects physical motion from approaching pedestrians or vehicles to dynamically trigger high-intensity mode.

Real-Time Clock (RTC): Provides accurate time tracking to execute strict schedule-based rules (e.g., auto-off at 6:00 AM and auto-on standby at 6:00 PM).

Dimming Control & Output: Pulse-Width Modulation (PWM) or relay modules that step down power output during idle periods (e.g., 20%–30% standby power) and ramp up to 100% upon motion verification.
# Operational Workflow
Daylight Phase (06:00 AM – 06:00 PM): Ambient LDR sensor detects sunlight; system forces the street light OFF regardless of motion to maximize energy savings.

Night Standby Phase (06:00 PM – 06:00 AM): System activates as natural light fades. The street light stays in a low-power dimmed state (standby).

Motion Activation Event: When a pedestrian or vehicle triggers the PIR motion sensor, the system instantly ramps the street light intensity to 100%.

Timeout & Dimming Return: Once motion clears and a predefined delay timer expires, the light smoothly transitions back down to its energy-saving dimmed standby state.
