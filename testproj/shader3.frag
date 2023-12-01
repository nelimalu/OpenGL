#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform float time;
uniform vec2 res;


void main() {
	vec2 pos = (gl_FragCoord.xy / res.xy) * 2 - 1;
	vec3 col = vec3(0.0, 0.0, 0.0);

	int amount = 30;
	for (int i = 1; i <= amount; i++) {
		float d = distance(pos, vec2(sin(time + i * 2) / 2 + sin(time) / 4, cos(time + i * 2) / 2) + cos(time) / 4);
		d = smoothstep(0.06, 0.05, d);
		col += d;
	}
	

	color = vec4(col, 1.0);
}
