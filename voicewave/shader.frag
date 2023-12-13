#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform float time;
uniform vec2 res;

void main() {
	vec2 pos = (gl_FragCoord.xy / res.xy) * 2 - 1;
	vec3 col = vec3(0.0, 0.0, 0.0);

	float d;
	d = distance(pos, vec2(pos.x, (0.05/pos.x) * sin(pos.x * 20 * sin(time) * sin(1))));
	d = 0.05 / d;
	col += vec3(0, 0, d / 2);

	d = distance(pos, vec2(pos.x, (0.05/pos.x) * sin(pos.x * 20 * sin(time) * sin(1.5))));
	d = 0.05 / d;
	col += vec3(0, d / 2, 0);

	d = distance(pos, vec2(pos.x, (0.05/pos.x) * sin(pos.x * 20 * sin(time) * sin(2))));
	d = 0.05 / d;
	col += vec3(d / 2, 0, 0);

	color = vec4(col, 1.0);
}
