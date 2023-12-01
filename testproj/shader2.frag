#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform float time;
uniform vec2 res;


void main() {
	vec2 pos = (gl_FragCoord.xy / res.xy) * 2 - 1;
	vec3 col = vec3(0.0, 0.0, 0.0);

	float r = 0.02 / distance(pos, vec2((sin(time) / 4) + sin((pos.y + time) / 3) / 2, pos.y));
	float g = 0.02 / distance(pos, vec2((sin(time) / 5) + sin((pos.y + time) / 3) / 2, pos.y));
	float b = 0.02 / distance(pos, vec2((sin(time) / 6) + sin((pos.y + time) / 3) / 2, pos.y));
	col = vec3(r, g, b);
	

	color = vec4(col, 1.0);
}
