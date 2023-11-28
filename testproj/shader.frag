#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform float time;
uniform vec2 res;

void main() {
	vec2 pos = (gl_FragCoord.xy / res.xy) * 2 - 1;

	//float dist = round(distance(pos, vec2(0.0)) / (sin(time) / 2 + 0.5));
	float dist = distance(pos, vec2(0.0));
	float b = fract(dist < 0.5 ? dist : 1 - dist / (sin(time) / 3 + 0.5));
	vec3 a = vec3(1 - b, 1 - b, 1 - b);

	color = vec4(a.xyz, 1.0);
	//color = vec4(a.x / 2 + 0.5, a.y / 2 + 0.5, a.z / 2 + 0.5, 1.0);
}
