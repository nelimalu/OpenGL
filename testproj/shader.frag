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
	vec3 col = vec3(0.0, 0.0, 0.0);

	float d = distance(pos, vec2(0.5, pos.y));
	d = distance(pos, vec2(pos.x, (sin(time) * d) * sin(10 * pos.x) + 0.6));

	d = smoothstep(0.5, 0.6, d);
	d -= 0.5;
	d = abs(d);
	d = 0.05 / d;
	col += d;

	color = vec4(col, 1.0);
}
