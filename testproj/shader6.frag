#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform float time;
uniform vec2 res;

vec3 palette(float t) {
	vec3 a = vec3(0.5, 0.5, 0.5);
	vec3 b = vec3(0.5, 0.5, 0.5);
	vec3 c = vec3(1.0, 1.0, 1.0);
	vec3 d = vec3(0.263, 0.416, 0.557);

	return a + b * cos(6.28318 * (c * t + d));
}

void main() {
	vec2 pos = (gl_FragCoord.xy / res.xy) * 2 - 1;
	vec2 pos0 = pos;
	vec3 finalColor = vec3(0.0);

	for (float i = 0.0; i < 5.0; i++) {
		pos = fract(pos * 1.5) - 0.5;
		float d = length(pos) * exp(-length(pos0));

		vec3 col = palette(length(pos0) + i * 0.4 + time * 0.4);

		d = sin(d * 8 + time) / 8.0;
		d = abs(d);
		d = pow(0.01 / d, 1.2);  // step and smoothstep

		finalColor += col * d;
	}

	color = vec4(finalColor, 1.0);
}
