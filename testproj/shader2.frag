#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform float time;
uniform vec2 res;

void main() {
	vec2 pos = (gl_FragCoord.xy / res.xy) * 2 - 1;
	vec3 col = vec3(0.0, 0.0, 0.0);

	for (int i = 1; i <= 1; i++) {
		float x = sin(time) / 4;
		x += sin((pos.y + time) * 0.5) / 2;
		//x += i * 5;
		float d = distance(pos, vec2(x, pos.y));
		d = 0.02 / d;
		col = vec3(d, 0.0, 0.0);
	}
	

	color = vec4(col, 1.0);
}
